import { Search, MoreHorizontal, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  connected: boolean;
  setConnected: (connected: boolean) => void;
}

export default function Header({ connected, setConnected }: HeaderProps) {
  return (
    <header className="z-20 py-3 px-4 flex justify-between items-center relative">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/images/uniswap-logo-transparent.png" alt="Uniswap Logo" className="h-8 w-8 pink-glow" />
          <span className="text-xl font-medium text-pink-500 hidden md:inline">Uniswap</span>
        </div>

        <button className="md:hidden text-gray-400">
          <Menu className="h-6 w-6" />
        </button>

        <nav className="hidden md:flex items-center gap-6 ml-4">
          <a href="/swap" className="text-white hover:text-pink-500 font-medium">Swap</a>
          <a href="/explore" className="text-gray-400 hover:text-white">Explore</a>
          <a href="/pool" className="text-gray-400 hover:text-white">Pool</a>
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

        <Button
          variant="outline"
          className="hidden md:flex rounded-full border-gray-700 text-black"
        >
          Get app
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-gray-400"
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>

        <Button
          onClick={() => setConnected(!connected)}
          className="shimmer text-white rounded-full"
        >
          {connected ? "0x15ae...ED35" : "Connect"}
        </Button>
      </div>
    </header>
  );
}
