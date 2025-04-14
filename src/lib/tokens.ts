export interface Token {
  symbol: string;
  name: string;
  logo: string;
  address?: string;
}

export const tokens: Token[] = [
  {
    symbol: "ETH",
    name: "Ethereum",
    logo: "/images/tokens/eth.png",
    address: "0x0000000000000000000000000000000000000000",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    logo: "/images/tokens/usdc.png",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    logo: "/images/tokens/uni.png",
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  },
  {
    symbol: "USDT",
    name: "Tether",
    logo: "/images/tokens/usdt.png",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  },
  {
    symbol: "PEPE",
    name: "Pepe",
    logo: "/images/tokens/pepe.png",
    address: "0x6982508145454ce325ddbe47031ab9a728b9d555",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    logo: "/images/tokens/dai.png",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
  },
  {
    symbol: "GALA",
    name: "Gala",
    logo: "/images/tokens/gala.webp",
    address: "0x20300927e2efcb5d01752328026111fd11b2acca",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    logo: "/images/tokens/btc.png",
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  },
  
];
