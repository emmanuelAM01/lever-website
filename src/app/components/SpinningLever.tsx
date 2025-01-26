"use client";
import React, { useRef, useEffect, useState } from "react";

const SpinningLever = () => {
  const leverRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  // Handle scroll for rotating the lever
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const scrollThreshold = 5; // Adjust this threshold for smoother control
      const delta = event.deltaY;

      if (Math.abs(delta) > scrollThreshold) {
        setRotation((prev) => prev + delta * 0.2); // Control sensitivity
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      ref={leverRef}
      className="relative w-64 h-64 md:w-96 md:h-96 perspective"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Central Rod */}
      <div className="absolute top-1/2 left-1/2 w-1 h-40 bg-primary transform -translate-x-1/2 -translate-y-full" />

      {/* Rotating Arm */}
      <div
        className="absolute top-1/2 left-1/2 w-32 h-1 bg-secondary transform origin-left -translate-y-1/2"
        style={{ transform: `rotate(${rotation * 2}deg)` }}
      />

      {/* Counterweight */}
      <div
        className="absolute top-1/2 left-1/2 w-6 h-6 bg-tertiary rounded-full transform origin-center"
        style={{
          transform: `translateX(${Math.sin(rotation / 20) * 30}px) rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default SpinningLever;
