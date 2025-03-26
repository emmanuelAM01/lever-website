import React, { useRef, useState } from "react";

interface BubbleProps {
  title: string;
  subtitle: string;
  size: string;
  className?: string;
}

const Bubble = ({ title, subtitle, size, className = "" }: BubbleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [waveOffset, setWaveOffset] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // shift -10 to 10
      setWaveOffset(x);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`aspect-square ${size} transition-transform duration-300 hover:scale-110 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative w-full h-full rounded-full shadow-xl overflow-hidden bg-white/50 flex items-center justify-center text-center">
        {/* Full fill with wavy clip-path */}
        <div
          className={`absolute bottom-0 w-full bg-corralPrimary transition-all duration-700 ease-out ${
            isHovered ? "h-full opacity-60" : "h-0 opacity-0"
          }`}
          style={{
            clipPath:
              `path("M0,100 Q25,${90 + waveOffset} 50,100 T100,100 V100 H0 Z")`,
          }}
        />

        {/* Text Content */}
        <div className="relative z-10 px-2 pointer-events-none">
          <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-textPrimary">
            {title}
          </h2>
          <p className="text-textSecondary text-xs sm:text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
