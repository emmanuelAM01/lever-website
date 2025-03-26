"use client";
import React from "react";
import Gradient from "./SpinningLever";

const Whitepaper = "/leverWhitepaper.pdf";

const Hero = ({
  scrollToForm,
  heroRef,
}: {
  scrollToForm: () => void;
  heroRef: React.RefObject<HTMLDivElement>;
}) => {
  const handleWhitePaper = () => window.open(Whitepaper, "_blank");

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen py-20 sm:py-32 px-4 flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Gradient />
      </div>

      <div className="relative z-20 w-full px-6 sm:px-10 flex flex-col items-center justify-center gap-12 text-center">
        <div className="space-y-8 max-w-4xl text-white">
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
            Commonsense Yield on
            <span className="text-corralPrimary">&nbsp;Bitcoin</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm w-full mx-auto">
            <button
              className="font-body bg-background hover:bg-background/60 text-black hover:text-gray-900 px-5 py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300"
              onClick={handleWhitePaper}
            >
              Whitepaper
            </button>

            <button
              onClick={scrollToForm}
              className="font-body bg-corralPrimary hover:bg-corralPrimary/60 text-white px-5 py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
