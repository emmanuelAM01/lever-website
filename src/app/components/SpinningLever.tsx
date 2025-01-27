"use client";
import React, { useState, useEffect } from "react";

const SpinningLever = () => {
  const [rotation, setRotation] = useState(0);

  // Continuous rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5); // Slow, smooth rotation
    }, 16); // 60fps smooth animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Dynamic Background with Layers */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-tertiary animate-wave"
        style={{
          transform: `rotate(${rotation}deg)`,
          backgroundSize: "400% 400%", // Allows the background to animate smoothly
        }}
      />

      {/* Animated Circles for the tidal wave effect */}
      <div
        className="absolute inset-0 w-full h-full flex justify-center items-center"
        style={{
          animation: "wave-animation 10s infinite linear",
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.5) 10%, transparent 30%)",
        }}
      >
        {/* Random Waves */}
        <div className="absolute w-72 h-72 bg-gradient-to-t from-primary to-tertiary rounded-full animate-pulse opacity-60" />
        <div className="absolute w-96 h-96 bg-gradient-to-b from-secondary to-primary rounded-full animate-pulse opacity-70" />
        <div className="absolute w-64 h-64 bg-gradient-to-tl from-tertiary to-primary rounded-full animate-pulse opacity-50" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>
  );
};

export default SpinningLever;
