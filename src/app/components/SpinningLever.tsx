"use client";
import React from "react";

const GradientBackground = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-corralPrimary via-intermediateBackground to-background animate-gradient-move"
        style={{
          backgroundSize: "200% 200%",
        }}
      />
    </div>
  );
};

export default GradientBackground;


