import React from "react";

const SpinningAsset = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 perspective">
      {/* Outer Hexagon - Positive Spin */}
      <div className="absolute inset-0 animate-spin-3d-positive">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-primary opacity-80"
        >
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
        </svg>
      </div>
      {/* Inner Circle - Negative Spin */}
      <div
        className="absolute inset-0 animate-spin-3d-negative"
        style={{ animationDelay: "-4s" }} // Add delay for a layered effect
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-secondary opacity-40"
        >
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>
    </div>
  );
};

export default SpinningAsset;
