"use client";
import React from "react";

const VaultVisual = () => {
  return (
    <div className="absolute bottom-0 right-0 z-10 w-[200px] h-[150px] pointer-events-none">
      {/* Glowing base platform */}
      <div className="absolute bottom-0 right-0 w-[150px] h-[80px] bg-[#efeee7] rounded-full blur-2xl opacity-60 translate-y-[30%] translate-x-[20%]" />

      {/* White stream lines */}
      <svg
        className="absolute bottom-16 right-10 opacity-20"
        width="200"
        height="80"
        viewBox="0 0 200 80"
        fill="none"
      >
        <path
          d="M0 40 C 50 20, 150 60, 200 40"
          stroke="white"
          strokeWidth="0.5"
        />
        <path
          d="M0 50 C 50 30, 150 70, 200 50"
          stroke="white"
          strokeWidth="0.5"
        />
      </svg>

      {/* Top disc */}
      <div className="absolute bottom-10 right-12 w-[60px] h-[30px] bg-[#efeee7] rounded-full shadow-inner border border-corralPrimary/30" />
    </div>
  );
};

export default VaultVisual;
