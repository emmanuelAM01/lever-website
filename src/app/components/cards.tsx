"use client";
import React from "react";
import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      title: "Real World Investments",
      desc: "A click away from real yield like AI GPU cashflow, media IP sales, and private credit",
      src: "/images/icons/rwaIcon.svg",
    },
    {
      title: "Predictable Lending",
      desc: "Collateralized BTC is used to borrow stablecoins at fixed, low rates (unlike most DeFi apps)",
      src: "/images/icons/lockIcon.svg",
    },
    {
      title: "Gradual Decentralization",
      desc: "Starting with bespoke capital raises and lending, evolving into a multi-asset and multi-lender DEX",
      src: "/images/icons/nodeIcon.svg",
    },
    {
      title: "Stablecoin Endgame",
      desc: "Creating a use case for BTC in the real world, launching LeverUSD to intermediate a new digital economy",
      src: "/images/icons/arrowsIcon.svg",
    },
  ];

  return (
    <div className="relative w-full px-4 py-12 sm:px-10 lg:px-32">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center py-10">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-textPrimary/70 mb-4 sm:mb-6">
            A Simple, Compliant Experience
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-textSecondary">
            Bitcoin-Collateralized Investing
          </h2>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/50 shadow-md rounded-none p-6 sm:p-8 flex items-start gap-4 border-[3px] rounded-tl-[0px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[0px] transition-shadow duration-500 hover:shadow-[0_0_8px_#FF6F61]"
            >
              <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] relative flex-shrink-0">
                <Image
                  src={card.src}
                  alt={card.title + " icon"}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-textPrimary mb-1">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-textSecondary">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
