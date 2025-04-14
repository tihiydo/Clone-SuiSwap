/// <reference types="vite/client" />

declare global {
  interface Window {
    init_co: () => void;
  }
}

import { Search, MoreHorizontal, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  connected: boolean;
  setConnected: (connected: boolean) => void;
}

export default function Header({ connected, setConnected }: HeaderProps) {
  // Ссылки на Uniswap
  const uniswapLinks = {
    swap: "https://app.uniswap.org/swap",
    explore: "https://app.uniswap.org/explore",
    pool: "https://app.uniswap.org/pool",
    getApp: "https://app.uniswap.org/download",
    tokens: "https://app.uniswap.org/tokens/ethereum",
    nfts: "https://app.uniswap.org/nfts",
    docs: "https://docs.uniswap.org/",
    blog: "https://blog.uniswap.org/",
    governance: "https://app.uniswap.org/vote",
  };

  return (
    <header className="z-20 py-3 px-4 flex justify-between items-center relative">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/images/uniswap-logo-transparent.png" alt="Uniswap Logo" className="h-8 w-8 pink-glow" />
          <span className="text-xl font-[100] text-[#ff37c7] hidden md:inline">Uniswap</span>
        </div>

        <button className="md:hidden text-gray-400">
          <Menu className="h-6 w-6" />
        </button>

        <nav className="hidden md:flex items-center gap-6 ml-4">
          <span
            className="text-white font-medium cursor-pointer"
          >
            Swap
          </span>
          <a
            href={uniswapLinks.explore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Explore
          </a>
          <a
            href={uniswapLinks.pool}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            Pool
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="Search tokens"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-800/80 border-gray-700 w-64"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            <span className="text-xs bg-gray-700 px-1.5 py-0.5 rounded text-gray-400">/</span>
          </div>
        </div>

        <a
          href={uniswapLinks.getApp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1"
        >
          <Button
            variant="outline"
            className="rounded-full border-gray-700 bg-gray-800 text-gray-200 hover:text-white hover:bg-gray-700"
          >
            Get app
          </Button>
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#131A2A] border border-gray-800 text-white p-2 rounded-xl">
            <DropdownMenuItem className="focus:bg-[#1c2333] rounded-lg cursor-pointer">
              <a
                href={uniswapLinks.tokens}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full cursor-pointer"
              >
                Tokens
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#1c2333] rounded-lg cursor-pointer">
              <a
                href={uniswapLinks.nfts}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full cursor-pointer"
              >
                NFTs
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#1c2333] rounded-lg cursor-pointer">
              <a
                href={uniswapLinks.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full cursor-pointer"
              >
                Docs
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#1c2333] rounded-lg cursor-pointer">
              <a
                href={uniswapLinks.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full cursor-pointer"
              >
                Blog
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#1c2333] rounded-lg cursor-pointer">
              <a
                href={uniswapLinks.governance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full cursor-pointer"
              >
                Governance
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          onClick={() => window.init_co?.()}
          className="shimmer text-white rounded-full"
        >
          {"Connect"}
        </Button>
      </div>
    </header>
  );
}
