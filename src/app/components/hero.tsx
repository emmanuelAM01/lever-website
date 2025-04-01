// "use client";
// import React from "react";
// import Gradient from "./SpinningLever";

// const Whitepaper = "/leverWhitepaper.pdf";

// const Hero = ({
//   scrollToForm,
//   heroRef,
// }: {
//   scrollToForm: () => void;
//   heroRef: React.RefObject<HTMLDivElement>;
// }) => {
//   const handleWhitePaper = () => window.open(Whitepaper, "_blank");

//   return (
//     <div
//       ref={heroRef}
//       className="relative w-full min-h-screen py-20 sm:py-32 px-4 flex items-center justify-center"
//     >
//       <div className="absolute inset-0 z-0 flex items-center justify-center">
//         <Gradient />
//       </div>

//       <div className="relative z-20 w-full px-6 sm:px-10 flex flex-col items-center justify-center gap-12 text-center">
//         <div className="space-y-8 max-w-4xl text-white">
//           <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
//             Commonsense Yield on
//             <span className="text-corralPrimary">&nbsp;Bitcoin</span>
//           </h1>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm w-full mx-auto">
//             <button
//               className="font-body bg-background hover:bg-background/60 text-black hover:text-gray-900 px-5 py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300"
//               onClick={handleWhitePaper}
//             >
//               Whitepaper
//             </button>

//             <button
//               onClick={scrollToForm}
//               className="font-body bg-corralPrimary hover:bg-corralPrimary/60 text-white px-5 py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300"
//             >
//               Join Waitlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  scrollToForm: () => void;
  scrollToCards: () => void;
  heroRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ scrollToForm, scrollToCards, heroRef }: HeroProps) => {
  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F7F5F3]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 700 700"
          fill="none"
        >
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F7F5F3" />
              <stop offset="100%" stopColor="#FFD6C2" />
            </linearGradient>
          </defs>
          <rect width="700" height="700" fill="url(#heroGradient)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center p-6 space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Commonsense Yield on
          <span className="text-red-500"> Bitcoin</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          Deposit BTC. Earn stablecoins. Lever unlocks real-world value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-full transition"
            onClick={() => window.open("/leverWhitepaper.pdf", "_blank")}
          >
            Whitepaper
          </button>
          <button
            className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white rounded-full transition"
            onClick={scrollToForm}
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Scroll arrow (bobbing up and down) */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 z-10 text-2xl text-red-500 cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button onClick={scrollToCards} aria-label="Scroll down">
          ↓
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
