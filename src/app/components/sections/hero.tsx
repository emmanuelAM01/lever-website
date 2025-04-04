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
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-heading">
          Commonsense Yield on
          <span className="text-red-500"> Bitcoin</span>
        </h1>
        <p className="text-base sm:text-lg text-textSecondary font-heading">
          Deposit BTC. Earn stablecoins from real-world assets.
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
