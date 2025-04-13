import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-4 md:px-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Connect with us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Help Center */}
          <div className="bg-[#0D1114] border border-gray-800 rounded-2xl p-6 flex flex-col h-64">
            <div className="bg-[#3A1C12] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              Help Center
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
              </svg>
            </h3>
            <p className="text-gray-400 mb-4">
              Get support
            </p>
          </div>

          {/* Blog */}
          <div className="bg-[#0D1114] border border-gray-800 rounded-2xl p-6 flex flex-col h-64">
            <div className="bg-[#222D1B] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
                <path d="M3 3V21H21V3H3ZM12.8 17H6.5V15.5H12.8V17ZM17.5 12.5H6.5V11H17.5V12.5ZM17.5 8H6.5V6.5H17.5V8Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              Blog
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
              </svg>
            </h3>
            <p className="text-gray-400 mb-4">
              Insights and updates from <br/>the team
            </p>
          </div>

          {/* Stay Connected */}
          <div className="bg-[#0D1114] border border-gray-800 rounded-2xl p-6 flex flex-col h-64">
            <div className="bg-[#1F1B2C] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-medium flex items-center gap-2 mb-2">
              Stay in touch
            </h3>
            <p className="text-gray-400 mb-4">
              Follow @Uniswap on X to stay <br/>up-to-date on updates
            </p>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="https://github.com/Uniswap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/Uniswap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://discord.com/invite/uniswap" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M19.7453 5.02793C18.2751 4.34021 16.7099 3.83666 15.0931 3.54545C15.0596 3.54545 15.0262 3.56233 15.0095 3.59608C14.8254 3.93003 14.6246 4.34021 14.4822 4.67416C12.7569 4.39982 11.0316 4.39982 9.3398 4.67416C9.19746 4.33179 8.99665 3.93003 8.81272 3.59608C8.79597 3.5607 8.76252 3.54383 8.72907 3.54545C7.11389 3.83666 5.54868 4.34021 4.07687 5.02793C4.0602 5.02793 4.0435 5.04481 4.03515 5.06168C0.807338 10.0123 -0.12318 14.83 0.385172 19.5636C0.385172 19.5974 0.401822 19.6311 0.426697 19.648C2.28389 21.0158 4.08522 21.8397 5.85215 22.3769C5.88552 22.3938 5.92069 22.3769 5.93737 22.3432C6.37772 21.7372 6.77138 21.0989 7.10864 20.4267C7.13374 20.3761 7.10864 20.3255 7.05668 20.3086C6.44548 20.0679 5.85883 19.7846 5.29727 19.4675C5.24532 19.4338 5.24532 19.3494 5.28877 19.3074C5.40095 19.2231 5.51331 19.1303 5.62568 19.0375C5.65068 19.0207 5.68405 19.0207 5.70906 19.0375C9.39175 20.7365 13.4414 20.7365 17.0739 19.0375C17.0989 19.0206 17.1323 19.0206 17.1573 19.0375C17.2697 19.1388 17.3821 19.2231 17.4942 19.3241C17.5377 19.3662 17.5377 19.4506 17.4858 19.4843C16.9242 19.8182 16.3292 20.1016 15.7263 20.3254C15.6743 20.3422 15.6576 20.4097 15.6743 20.4435C16.02 21.1156 16.4137 21.7371 16.8456 22.36C16.8623 22.3769 16.8974 22.3938 16.9308 22.3769C18.7144 21.8397 20.5157 21.0158 22.3729 19.648C22.3978 19.6311 22.4145 19.5974 22.4145 19.5636C23.0342 14.0569 21.5807 9.27972 19.7621 5.0617C19.7538 5.04481 19.7453 5.02793 19.7453 5.02793ZM7.56568 16.5963C6.48185 16.5963 5.59121 15.5875 5.59121 14.3547C5.59121 13.122 6.46518 12.1132 7.56568 12.1132C8.67455 12.1132 9.56518 13.1388 9.54851 14.3547C9.54851 15.5875 8.66618 16.5963 7.56568 16.5963ZM16.2429 16.5963C15.1591 16.5963 14.2685 15.5875 14.2685 14.3547C14.2685 13.122 15.1424 12.1132 16.2429 12.1132C17.3518 12.1132 18.2425 13.1388 18.2258 14.3547C18.2258 15.5875 17.3518 16.5963 16.2429 16.5963Z" fill="currentColor" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div>
              <h4 className="font-medium mb-4">App</h4>
              <ul className="space-y-3">
                <li><a href="/swap" className="text-gray-400 hover:text-white">Swap</a></li>
                <li><a href="/explore" className="text-gray-400 hover:text-white">Explore</a></li>
                <li><a href="/pool" className="text-gray-400 hover:text-white">Pool</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="/brand" className="text-gray-400 hover:text-white">Brand assets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Protocol</h4>
              <ul className="space-y-3">
                <li><a href="/vote" className="text-gray-400 hover:text-white">Vote</a></li>
                <li><a href="/governance" className="text-gray-400 hover:text-white">Governance</a></li>
                <li><a href="/developers" className="text-gray-400 hover:text-white">Developers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Need help?</h4>
              <ul className="space-y-3">
                <li><a href="/help" className="text-gray-400 hover:text-white">Help center</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
