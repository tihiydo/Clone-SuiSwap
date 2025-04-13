import { useState } from "react";
import { ArrowDownIcon, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

interface SwapInterfaceProps {
  connected: boolean;
}

export default function SwapInterface({ connected }: SwapInterfaceProps) {
  const [fromAmount, setFromAmount] = useState<string>("");
  const [toAmount, setToAmount] = useState<string>("");

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
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="text-5xl font-semibold bg-transparent border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 w-full placeholder:text-gray-600"
                />
                <Button
                  variant="outline"
                  className="rounded-full border-gray-700 bg-gray-900/60 flex items-center gap-2 h-10 shadow-lg hover:bg-gray-800"
                >
                  <img src="/images/tokens/eth.png" alt="ETH" className="w-5 h-5 rounded-full" />
                  <span className=" text-white">ETH</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                $0 USD 
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <div className="p-2 rounded-full bg-[#131A2A] border border-gray-800 shadow-md">
                <ArrowDownIcon className="h-5 w-5" color="white"/>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0D111C]/90 border border-gray-800 p-4 mt-0">
              <div className="mb-1 text-gray-400 text-sm">Buy</div>
              <div className="flex items-center justify-between">
                <Input
                  type="text"
                  placeholder="0"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="text-5xl font-semibold bg-transparent border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 w-full placeholder:text-gray-600"
                />
                <Button
                  variant="outline"
                  className="rounded-full border-none bg-pink-600 glow-pink hover:bg-pink-700 px-4 py-2 h-10 text-sm text-white shadow-lg"
                >
                  Select token
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            <Button
              className="w-full mt-4 mb-1 shimmer text-white rounded-2xl py-6 text-xl font-semibold shadow-xl"
              disabled={!connected}
              onClick={() => {}}
            >
              {connected ? "Start swapping" : "Connect Wallet"}
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
