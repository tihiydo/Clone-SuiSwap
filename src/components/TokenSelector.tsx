import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Token, tokens } from "@/lib/tokens";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface TokenSelectorProps {
  selectedToken: Token | null;
  onSelectToken: (token: Token) => void;
  variant?: "default" | "pink";
  placeholder?: string;
  excludeTokens?: Token[]; // Новое свойство для исключения токенов
}

export function TokenSelector({
  selectedToken,
  onSelectToken,
  variant = "default",
  placeholder = "Select token",
  excludeTokens = [],
}: TokenSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтрация токенов, исключая те, которые указаны в excludeTokens
  const availableTokens = tokens.filter(
    (token) => !excludeTokens.some((excludeToken) => excludeToken.symbol === token.symbol)
  );

  const filteredTokens = availableTokens.filter((token) =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Показываем только доступные токены в быстром выборе (исключая те, что в excludeTokens)
  const quickSelectTokens = availableTokens.slice(0, 3);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={
            variant === "default"
              ? "rounded-full border-gray-700 bg-gray-900/60 flex items-center gap-2 h-10 shadow-lg hover:bg-gray-800"
              : "rounded-full border-none bg-pink-600 glow-pink hover:bg-pink-700 px-4 py-2 h-10 text-sm text-white shadow-lg"
          }
        >
          {selectedToken ? (
            <>
              <img
                src={selectedToken.logo}
                alt={selectedToken.symbol}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-white">{selectedToken.symbol}</span>
            </>
          ) : (
            <span>{placeholder}</span>
          )}
          <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[300px] bg-[#131A2A] border border-gray-800 p-4 rounded-2xl shadow-xl"
        align="end"
        sideOffset={8}
      >
        <div className="mb-3">
          <div className="text-white font-medium mb-2 text-lg">Select a token</div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search name or paste address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#0D111C] border-gray-800 pl-9 text-white rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          {quickSelectTokens.map((token) => (
            <Button
              key={`quick-${token.symbol}`}
              variant="outline"
              size="sm"
              className="rounded-full border-gray-700 bg-[#0D111C] hover:bg-gray-800 flex items-center gap-1 py-1 px-2"
              onClick={() => {
                onSelectToken(token);
                setSearchQuery("");
              }}
            >
              <img src={token.logo} alt={token.symbol} className="w-4 h-4 rounded-full" />
              <span className="text-white text-xs">{token.symbol}</span>
            </Button>
          ))}
        </div>

        <div className="mt-2 max-h-[300px] overflow-y-auto pr-1">
          {filteredTokens.length > 0 ? (
            filteredTokens.map((token) => (
              <DropdownMenuItem
                key={token.symbol}
                onClick={() => {
                  onSelectToken(token);
                  setSearchQuery("");
                }}
                className="flex items-center gap-3 p-2 cursor-pointer hover:bg-[#222c3f] rounded-lg mb-1 token-item-hover group"
              >
                <img src={token.logo} alt={token.symbol} className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                  <span className="font-medium text-white group-hover:text-black">{token.symbol}</span>
                  <span className="text-sm text-gray-400">{token.name}</span>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="text-center py-8 text-gray-400">
              {excludeTokens.length > 0 && availableTokens.length === 0
                ? "No other tokens available"
                : "No tokens found"}
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
