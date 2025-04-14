import { useEffect, useState } from 'react';
import { fetchTokenPrices } from '@/lib/priceService';

interface TokenPrice {
  usd: number;
  usd_24h_change?: number;
}

interface TokenPrices {
  [symbol: string]: TokenPrice;
}

export default function TokenPriceDisplay() {
  const [prices, setPrices] = useState<TokenPrices>({
    ETH: { usd: 0, usd_24h_change: 0 },
    USDC: { usd: 0, usd_24h_change: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrices = async () => {
      setLoading(true);
      try {
        const data = await fetchTokenPrices();
        setPrices(data);
      } catch (error) {
        console.error('Error fetching prices:', error);
      } finally {
        setLoading(false);
      }
    };

    getPrices();
    // Обновляем цены каждые 60 секунд
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  // Функция для форматирования процентного изменения
  const formatChange = (change?: number) => {
    if (change === undefined) return '0.00%';
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  // Функция для определения цвета процентного изменения
  const getChangeColor = (change?: number) => {
    if (!change) return 'text-gray-400';
    return change >= 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="bg-[#131A2A] border border-gray-800 rounded-xl p-3 w-full max-w-xs">
      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-800 rounded"></div>
          <div className="h-10 bg-gray-800 rounded"></div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Ethereum price display */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/images/tokens/eth.png"
                alt="Ethereum"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-medium text-white">Ethereum</div>
                <div className="text-sm text-gray-400">${prices.ETH?.usd.toFixed(2)}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-white">ETH</div>
              <div className={`text-sm ${getChangeColor(prices.ETH?.usd_24h_change)}`}>
                {formatChange(prices.ETH?.usd_24h_change)}
              </div>
            </div>
          </div>

          {/* USDC price display */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/images/tokens/usdc.png"
                alt="USD Coin"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-medium text-white">USD Coin</div>
                <div className="text-sm text-gray-400">${prices.USDC?.usd.toFixed(2)}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-white">USDC</div>
              <div className={`text-sm ${getChangeColor(prices.USDC?.usd_24h_change)}`}>
                {formatChange(prices.USDC?.usd_24h_change)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
