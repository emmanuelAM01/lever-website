"use client";
import React from "react";
import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      title: "Real World Investments",
      desc: "Lever connects you to tangible yield from AI data centers and private credit funds",
      src: "/images/icons/rwaIcon.svg",
    },
    {
      title: "Predictable Lending",
      desc: "BTC deposits get collateralized to borrow investable stablecoins at fixed, low rates",
      src: "/images/icons/lockIcon.svg",
    },
    {
      title: "Gradual Decentralization",
      desc: "Starting with bespoke capital raises and lending, evolving into a decentralized exchange",
      src: "/images/icons/nodeIcon.svg",
    },
    {
      title: "Stablecoin Endgame",
      desc: "Lever gives BTC a real-world use case, launching LeverUSD to underlie a new digital economy",
      src: "/images/icons/arrowsIcon.svg",
    },
  ];

  return (
    <div className="relative w-full px-4 py-12 sm:px-10 lg:px-32">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center py-10">

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-textSecondary">
            Bitcoin-Collateralized Investing
          </h2>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-sm p-6 sm:p-8 flex items-start gap-4 border border-gray-200 rounded-tl-[0px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[0px] transition transform duration-300 hover:shadow-lg hover:-translate-y-1"
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
