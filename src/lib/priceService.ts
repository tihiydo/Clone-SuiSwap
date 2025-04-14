// Мы будем использовать CoinGecko API для получения курсов
// API не требует ключа для базовых запросов

import { Token } from "./tokens";

// Интерфейс для хранения курсов токенов
interface TokenPrices {
  [symbol: string]: {
    usd: number;
    usd_24h_change?: number;
  };
}

// Карта соответствия символов токенов и идентификаторов CoinGecko
const tokenIdMap: Record<string, string> = {
  ETH: "ethereum",
  USDC: "usd-coin",
  UNI: "uniswap",
  BTC: "bitcoin",
  PEPE: "pepe",
  DAI: "dai",
  GALA: "gala",
  USDT: "tether",
};

// Кэш для хранения курсов, чтобы не делать слишком много запросов
let priceCache: TokenPrices = {};
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 1000; // 1 минута в миллисекундах

/**
 * Получение курсов для токенов
 */
export const fetchTokenPrices = async (): Promise<TokenPrices> => {
  const currentTime = Date.now();

  // Используем кэш, если данные достаточно свежие
  if (currentTime - lastFetchTime < CACHE_DURATION && Object.keys(priceCache).length > 0) {
    return priceCache;
  }

  try {
    // Получаем список идентификаторов токенов для запроса
    const tokenIds = Object.values(tokenIdMap).join(",");

    // Запрос к CoinGecko API
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${tokenIds}&vs_currencies=usd&include_24hr_change=true`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch token prices");
    }

    const data = await response.json();

    // Преобразование ответа в наш формат
    const prices: TokenPrices = {};

    Object.entries(tokenIdMap).forEach(([symbol, id]) => {
      if (data[id]) {
        prices[symbol] = {
          usd: data[id].usd,
          usd_24h_change: data[id].usd_24h_change,
        };
      }
    });

    // Обновляем кэш
    priceCache = prices;
    lastFetchTime = currentTime;

    return prices;
  } catch (error) {
    console.error("Error fetching token prices:", error);

    // Если возникла ошибка, но у нас есть кэшированные данные, возвращаем их
    if (Object.keys(priceCache).length > 0) {
      return priceCache;
    }

    // Иначе возвращаем заглушки
    return {
      ETH: { usd: 2000, usd_24h_change: 1.5 },
      USDC: { usd: 1, usd_24h_change: 0.01 },
      UNI: { usd: 10, usd_24h_change: -0.5 },
      BTC: { usd: 2000, usd_24h_change: 1.5 },
      PEPE: { usd: 1, usd_24h_change: 0.01 },
      DAI: { usd: 10, usd_24h_change: -0.5 },
      GALA: { usd: 10, usd_24h_change: -0.5 },
      USDT: { usd: 10, usd_24h_change: -0.5 },
    };
  }
};

/**
 * Получение цены для конкретного токена в USD
 */
export const getTokenPriceInUsd = async (token: Token): Promise<number> => {
  const prices = await fetchTokenPrices();
  return prices[token.symbol]?.usd || 0;
};

/**
 * Расчет обменного курса между двумя токенами
 * @returns количество токенов, которое можно получить за 1 единицу fromToken
 */
export const getExchangeRate = async (fromToken: Token, toToken: Token): Promise<number> => {
  const prices = await fetchTokenPrices();

  const fromPrice = prices[fromToken.symbol]?.usd;
  const toPrice = prices[toToken.symbol]?.usd;

  if (!fromPrice || !toPrice) {
    return 0;
  }

  // Сколько toToken можно получить за 1 fromToken
  return fromPrice / toPrice;
};

/**
 * Расчет стоимости токенов в USD
 */
export const calculateUsdValue = async (amount: string, token: Token): Promise<string> => {
  if (!amount || isNaN(parseFloat(amount))) {
    return "$0.00";
  }

  const tokenPrice = await getTokenPriceInUsd(token);
  const value = parseFloat(amount) * tokenPrice;

  return `$${value.toFixed(2)}`;
};

/**
 * Расчет количества токенов, которое можно получить при обмене
 */
export const calculateExchangeAmount = async (
  fromAmount: string,
  fromToken: Token,
  toToken: Token
): Promise<string> => {
  if (!fromAmount || isNaN(parseFloat(fromAmount)) || !fromToken || !toToken) {
    return "";
  }

  const exchangeRate = await getExchangeRate(fromToken, toToken);
  const amount = parseFloat(fromAmount) * exchangeRate;

  // Форматируем вывод в зависимости от величины числа
  if (amount < 0.0001) {
    return amount.toExponential(4);
  }

  return amount.toFixed(6);
};
