import { ArrowRight, ExternalLink, Code, Wallet } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import SwapInterface from "./SwapInterface";

interface LandingPageProps {
  connected: boolean;
}

export default function LandingPage({ connected }: LandingPageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section - 100vh */}
      <section className="min-h-screen flex items-center relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="hidden lg:block lg:text-left max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-medium mb-6 tracking-tight">
                Go directly to DeFi
              </h1>
            </div>
            <SwapInterface connected={connected} />
          </div>
        </div>
      </section>

      {/* Features Section - Main Cards */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side - Web App */}
            <Card className="bg-gradient-to-br from-[#0c1b2a] to-[#0f233a] border-gray-800 p-8 rounded-3xl overflow-hidden">
              <div className="mb-5">
                <div className="bg-[#1A2C3A] w-fit rounded-[24px] p-2.5 flex items-center gap-2 text-blue-400">
                  <Wallet className="h-5 w-5" />
                  <span>Token Exchange</span>
                </div>
              </div>
              <h2 className="text-2xl text-blue-400 font-medium mb-8">
                Swapping made simple. Access thousands of tokens across 11+ networks.
              </h2>

              <div className="space-y-2 mt-8">
                {/* Token Row - ETH */}
                <div className="flex items-center rounded-xl bg-[#0D111C]/60 p-3">
                  <div className="w-10 h-10 mr-3">
                    <img
                      src="/images/tokens/eth.png"
                      alt="ETH"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-white">Ethereum</div>
                      <div className="text-white">ETH</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-400">0,00 $</div>
                      <div className="text-green-500">0,00%</div>
                    </div>
                  </div>
                </div>

                {/* Token Row - USDC */}
                <div className="flex items-center rounded-xl bg-[#0D111C]/60 p-3">
                  <div className="w-10 h-10 mr-3">
                    <img
                      src="/images/tokens/usdc.png"
                      alt="USDC"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-white">USD Coin</div>
                      <div className="text-white">USDC</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-400">0,00 $</div>
                      <div className="text-green-500">0,00%</div>
                    </div>
                  </div>
                </div>

                {/* Token Row - Empty 1 */}
                <div className="flex items-center rounded-xl bg-[#0D111C]/60 p-3 blur-sm">
                  <div className="w-10 h-10 mr-3 bg-purple-900 rounded-full flex items-center justify-center opacity-60">
                    <span className="text-white">...</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-white opacity-60">Solana</div>
                      <div className="text-white opacity-60">...</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-400">0,00 $</div>
                      <div className="text-green-500">0,00%</div>
                    </div>
                  </div>
                </div>

                {/* Token Row - Empty 2 */}
                <div className="flex items-center rounded-xl bg-[#0D111C]/60 p-3 blur-md">
                  <div className="w-10 h-10 mr-3 bg-red-600 rounded-full flex items-center justify-center opacity-40">
                    <span className="text-white">Avax</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium text-white opacity-40">...</div>
                      <div className="text-white opacity-40">...</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-400">0,00 $</div>
                      <div className="text-green-500">0,00%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Right Side - Mobile App */}
            <Card className="bg-gradient-to-br from-[#2d0f38] to-[#410d5a] border-gray-800 p-8 rounded-3xl overflow-hidden">
              <div className="mb-5">
                <div className="bg-[#352451] w-fit rounded-[24px] p-2.5 flex items-center gap-2 text-pink-400">
                  <span className="text-lg">📱</span>
                  <span>Mobile Wallet</span>
                </div>
              </div>
              <h2 className="text-2xl text-pink-400 font-medium mb-8">
                Wallet built for swapping. Available on iOS and Android.
              </h2>

              {/* Mobile App Preview */}
              <div className="relative mx-auto max-w-[400px]">
                <div className="rounded-3xl bg-black overflow-hidden shadow-2xl border border-gray-800 relative">
                  <div className="absolute inset-0 rounded-3xl bg-pink-500/5 pointer-events-none" />

                  {/* Wallet Content */}
                  <div className="pt-12 pb-4 px-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white">$2,822.39</div>
                      <div className="text-green-500 text-sm">
                        $156.01 (0.69%)
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      <div className="bg-[#1f1f23] p-2.5 rounded-lg flex justify-center">
                        <img
                          src="/images/emoji/card.png"
                          alt="💳"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="bg-[#1f1f23] p-2.5 rounded-lg flex justify-center">
                        <img
                          src="/images/emoji/trash.png"
                          alt="🗑️"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="bg-[#1f1f23] p-2.5 rounded-lg flex justify-center">
                        <img
                          src="/images/emoji/download.png"
                          alt="⬇️"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="bg-[#1f1f23] p-2.5 rounded-lg flex justify-center">
                        <img
                          src="/images/emoji/search.png"
                          alt="🔍"
                          className="w-6 h-6"
                        />
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-between mt-4 border-b border-gray-800 pb-2">
                      <span className="text-white font-medium">Tokens</span>
                      <span className="text-gray-500">NFTs</span>
                      <span className="text-gray-500">Activity</span>
                    </div>

                    {/* Token List */}
                    <div className="py-3">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="/images/tokens/eth.png"
                          alt="ETH"
                          className="w-8 h-8"
                        />
                        <div className="flex-1 h-2.5 bg-gray-800 rounded animate-pulse" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-500" />
                        <div className="flex-1 h-2.5 bg-gray-800 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-[#072f2e] to-[#0a2225] border-gray-800 p-8 rounded-3xl overflow-hidden">
              <div className="mb-5">
                <div className="bg-[#1A3A35] w-fit rounded-[24px] p-2.5 flex items-center gap-2 text-green-400">
                  <Code className="h-5 w-5" />
                  <span>Developer Docs</span>
                </div>
              </div>
              <h2 className="text-2xl text-green-400 font-medium mb-8">
                Build the next generation of open applications and tools.
              </h2>

              <div className="relative bg-black rounded-xl p-4 overflow-hidden mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
                </div>

                <pre className="text-xs text-green-500 opacity-80">
                  <code>
                    {`// Uniswap V3 SDK Example
import { Pool } from '@uniswap/v3-sdk'
import { Token } from '@uniswap/sdk-core'

// Pool creation
const uniswap-v3-sdk`}
                  </code>
                </pre>

                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#121212] px-3 py-1.5 border border-gray-800 text-green-400 rounded-md flex items-center gap-2">
                    <span className="text-sm">uniswap-v3-periphery</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Card>
            {/* Liquidity Card */}
            <Card className="bg-gradient-to-br from-[#241b3a] to-[#1b1730] border-gray-800 p-8 rounded-3xl overflow-hidden relative">
              <div className="mb-5">
                <div className="bg-[#352451] w-fit rounded-[24px] p-2.5 flex items-center gap-2 text-purple-400">
                  <span className="text-lg">📊</span>
                  <span>Liquidity</span>
                </div>
              </div>
              <h2 className="text-2xl text-purple-400 font-medium mb-8">
                Provide liquidity to Uniswap protocol pools and earn fees from swaps.
              </h2>
              <img
                src="/images/section-image.png"
                className="absolute top-0 blur-sm opacity-75"
                alt="Liquidity"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto">
          <h2 className="text-5xl font-medium mb-16 text-center">
            Trusted by millions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#121212] rounded-xl p-6">
              <div className="text-gray-400 mb-4">All time volume</div>
              <div className="text-5xl font-bold">2.2</div>
            </div>

            <div className="bg-[#121212] rounded-xl p-6">
              <div className="text-gray-400 mb-4">All time swaps</div>
              <div className="text-5xl font-bold">16.6</div>
            </div>

            <div className="bg-[#121212] rounded-xl p-6">
              <div className="text-gray-400 mb-4">LP fee all time</div>
              <div className="text-5xl font-bold">3.4</div>
            </div>

            <div className="bg-[#121212] rounded-xl p-6">
              <div className="flex justify-between">
                <div className="text-gray-400 mb-4">24H volume</div>
                <div className="text-green-500">+24H</div>
              </div>
              <div className="text-5xl font-bold text-green-500">500.0</div>
            </div>
          </div>

          <div className="max-w-lg mx-auto mt-16 text-center">
            <p className="text-gray-400 mb-8">
              Uniswap products work on top of the Uniswap protocol. The protocol
              is the largest on-chain marketplace with billions of dollars in
              weekly volume through thousands of tokens on Ethereum and over 7
              additional chains.
            </p>

            <Button
              variant="outline"
              className="border-gray-700 rounded-full px-6 py-3 flex items-center gap-2"
            >
              <span className="text-black">Learn more</span>
              <ArrowRight className="h-4 w-4" color="black" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
