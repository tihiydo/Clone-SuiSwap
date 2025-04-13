import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  const [connected, setConnected] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D111C] text-white flex flex-col relative overflow-hidden">
      {/* Animated blob gradients */}
      <div className="absolute w-[400px] h-[400px] top-[10%] right-[15%] bg-[#ff5800] opacity-[0.03] rounded-full blur-[120px] animate-pulse"
        style={{ animationDuration: "12s" }} />
      <div className="absolute w-[400px] h-[400px] top-[40%] left-[5%] bg-[#FB118E] opacity-[0.04] rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: "18s" }} />
      <div className="absolute w-[400px] h-[400px] bottom-[10%] right-[30%] bg-[#407BFF] opacity-[0.04] rounded-full blur-[130px] animate-pulse"
        style={{ animationDuration: "15s" }} />
      <div className="absolute w-[300px] h-[300px] bottom-[20%] left-[20%] bg-[#04D112] opacity-[0.02] rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: "20s" }} />

      {/* Content */}
      <Header connected={connected} setConnected={setConnected} />
      <main className="flex-1 flex flex-col relative z-10">
        <LandingPage connected={connected} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
