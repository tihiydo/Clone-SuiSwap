import { useState, useEffect } from "react";
import { ArrowDownIcon, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { TokenSelector } from "./TokenSelector";
import { Token, tokens } from "@/lib/tokens";
import {
  calculateUsdValue,
  calculateExchangeAmount,
  getExchangeRate
} from "@/lib/priceService";

interface SwapInterfaceProps {
  connected: boolean;
}

export default function SwapInterface({ connected }: SwapInterfaceProps) {
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");
  const [fromToken, setFromToken] = useState<Token>(tokens[0]); // ETH by default
  const [toToken, setToToken] = useState<Token | null>(tokens.find(t => t.symbol === "USDC") || null);
  const [fromUsdValue, setFromUsdValue] = useState<string>("$0.00");
  const [toUsdValue, setToUsdValue] = useState<string>("$0.00");
  const [isLoadingPrice, setIsLoadingPrice] = useState<boolean>(false);
  const [exchangeRate, setExchangeRate] = useState<string>("");
  const [isRefreshingRates, setIsRefreshingRates] = useState<boolean>(false);

  // Функция для обновления значения в USD
  const updateFromUsdValue = async () => {
    if (fromToken) {
      const value = await calculateUsdValue(fromAmount, fromToken);
      setFromUsdValue(value);
    }
  };

  // Функция для обновления количества получаемых токенов
  const updateToAmount = async () => {
    if (fromToken && toToken && fromAmount) {
      setIsLoadingPrice(true);
      const amount = await calculateExchangeAmount(fromAmount, fromToken, toToken);
      setToAmount(amount);

      // Также обновляем стоимость в USD
      const value = await calculateUsdValue(amount, toToken);
      setToUsdValue(value);
      setIsLoadingPrice(false);
    } else {
      setToAmount("");
      setToUsdValue("$0.00");
    }
  };

  // Функция для обновления курса обмена
  const updateExchangeRate = async () => {
    if (fromToken && toToken) {
      setIsRefreshingRates(true);
      const rate = await getExchangeRate(fromToken, toToken);
      setExchangeRate(`1 ${fromToken.symbol} = ${rate.toFixed(6)} ${toToken.symbol}`);
      setIsRefreshingRates(false);
    } else {
      setExchangeRate("");
    }
  };

  // Обновляем курс обмена при изменении токенов
  useEffect(() => {
    updateExchangeRate();
  }, [fromToken, toToken]);

  // Реагируем на изменение fromAmount
  useEffect(() => {
    updateFromUsdValue();
    updateToAmount();
  }, [fromAmount, fromToken, toToken]);

  // Function to swap token positions
  const handleSwapTokens = () => {
    if (!toToken) return;

    const tempToken = fromToken;
    const tempAmount = fromAmount;

    setFromToken(toToken);
    setFromAmount(toAmount);

    setToToken(tempToken);
    setToAmount(tempAmount);
  };

  // Функция обработки изменения fromAmount
  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Проверяем, что это число или пустая строка
    if (value === "" || /^[0-9]*[.,]?[0-9]*$/.test(value)) {
      // Нормализуем запись числа (заменяем запятую на точку)
      setFromAmount(value.replace(",", "."));
    }
  };

  // Обработка изменения выбранных токенов
  const handleFromTokenChange = (token: Token) => {
    setFromToken(token);

    // Если выбран тот же токен, что и в toToken, сбрасываем toToken
    if (toToken && token.symbol === toToken.symbol) {
      setToToken(null);
    }
  };

  // Функция для принудительного обновления курсов
  const handleRefreshRates = () => {
    updateExchangeRate();
    updateToAmount();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl px-4">
      <div className="text-center mb-14 mt-6">
        <h1 className="text-5xl font-medium mb-6 tracking-tight">
          Swap anytime, <br />anywhere
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-[450px]">
        <Card className="w-full glass-card border-gray-800 rounded-3xl overflow-hidden shadow-lg">
          <div className="p-4">
            <div className="mb-1 text-gray-400 text-sm">Sell</div>
            <div className="rounded-2xl bg-[#0D111C]/90 border border-gray-800 p-4">
              <div className="flex items-center justify-between">
                <Input
                  type="text"
                  placeholder="0"
                  value={fromAmount}
                  onChange={handleFromAmountChange}
                  className="text-5xl text-white font-semibold bg-transparent border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 w-full placeholder:text-gray-600"
                />
                <TokenSelector
                  selectedToken={fromToken}
                  onSelectToken={handleFromTokenChange}
                  variant="default"
                />
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {fromUsdValue}
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <button
                className="p-2 rounded-full bg-[#131A2A] border border-gray-800 shadow-md hover:bg-[#1c2333] transition-colors"
                onClick={handleSwapTokens}
              >
                <ArrowDownIcon className="h-5 w-5" color="white"/>
              </button>
            </div>

            <div className="rounded-2xl bg-[#0D111C]/90 border border-gray-800 p-4 mt-0">
              <div className="mb-1 text-gray-400 text-sm">Buy</div>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <Input
                    type="text"
                    placeholder="0"
                    value={toAmount}
                    readOnly
                    className="text-5xl text-white font-semibold bg-transparent border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 w-full placeholder:text-gray-600"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {isLoadingPrice ? "Loading..." : toUsdValue}
                  </div>
                </div>
                <TokenSelector
                  selectedToken={toToken}
                  onSelectToken={setToToken}
                  variant="pink"
                  placeholder="Select token"
                  excludeTokens={[fromToken]} // Исключаем токен, выбранный выше
                />
              </div>
            </div>

            {/* Индикатор курса обмена */}
            {exchangeRate && toToken && (
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="text-sm text-gray-400">{exchangeRate}</div>
                <button
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  onClick={handleRefreshRates}
                  disabled={isRefreshingRates}
                >
                  <RefreshCw size={14} className={isRefreshingRates ? "animate-spin" : ""} />
                </button>
              </div>
            )}

            <Button
              className="w-full mt-4 mb-1 shimmer text-white rounded-2xl py-6 text-xl font-semibold shadow-xl"
              disabled={!toToken}
              onClick={() => {}}
            >
              {connected ? (!toToken ? "Select token" : "Start swapping") : "Connect Wallet"}
            </Button>
          </div>
        </Card>

        <div className="text-center text-gray-400 text-sm mt-5">
          The largest on-chain marketplace. Buy and sell cryptocurrency on Ethereum and 11+ other chains.
        </div>
      </div>
    </div>
  );
}
