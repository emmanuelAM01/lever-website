import React from 'react';

const Cards = () => {
  return (
    <div className="px-4 lg:px-[175px] py-8 bg-black">
      <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-relaxed lg:leading-[1.5] tracking-wide text-center mb-[50px]">
        A Simple, Compliant, and Refreshing Experience
      </h1>

      {/* First Card */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        {/* Text (First on mobile) */}
        <div className="flex-1 bg-[#1A1A1A] p-6 lg:p-12 flex flex-col justify-center items-start text-white order-1 lg:order-1">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Bitcoin Collateralized Loans
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            Deposit BTC into an escrow (via Collar) to <br /> borrow USD tokens at sub 5% interest.
          </p>
        </div>
        {/* Image (Second on mobile)  bg-[#dbd9d1]*/}
        <div className="flex-1 p-6 lg:p-12 flex flex-col justify-center text-white order-2 lg:order-2">
          <img
            src="/images/collateralizeCard.png"
            alt="Collateralize"
            className="w-full sm:w-2/3 lg:w-2/3 h-auto rounded-lg mx-auto"
          />
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        {/* Text (First on mobile) */}
        <div className="flex-1 bg-[#1A1A1A] p-6 lg:p-12 flex flex-col justify-center items-start text-white order-1 lg:order-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Real World Investments
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Access real estate, like a Hyatt in Tuscany, <br />  on Globacap&apos;s regulated market.
          </p>
        </div>
        {/* Image (Second on mobile) */}
        <div className=" flex-1 p-6 lg:p-12 lg:w-2/3 flex flex-col justify-center text-white order-2 lg:order-1">
          <img
            src="/images/card.png"
            alt="Tuscany Real Estate"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Third Card */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        {/* Text (First on mobile) */}
        <div className="flex-1 bg-[#1A1A1A] p-6 lg:p-12 flex flex-col justify-center items-start text-white order-1 lg:order-1">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Commonsense Diversification
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            Unlock crypto-uncorrelated yield, without <br />  selling BTC, through tangible businesses.
          </p>
        </div>
        {/* Image (Second on mobile) */}
        <div className=" flex-1 p-6 lg:p-12 flex flex-col justify-center text-white order-2 lg:order-2">
          <img
            src="/images/diversificationCard.png"
            alt="Diversification"
            className="w-full sm:w-2/3 lg:w-2/3 h-auto rounded-lg mx-auto"
          />
        </div>
      </div>

      {/* Fourth Card */}
      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        {/* Text (First on mobile) */}
        <div className="flex-1 bg-[#1A1A1A] p-6 lg:p-12 flex flex-col justify-center items-start text-white order-1 lg:order-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Gradual Decentralization
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Starting with bespoke fundraises, building toward <br /> an asset-agnostic, DeFi future.
          </p>
        </div>
        {/* Image (Second on mobile) */}
        <div className=" flex-1 lg:w-2/3 p-6 lg:p-12 flex flex-col justify-center text-white order-2 lg:order-1">
          <img
            src="/images/decentralizationCard.png"
            alt="Decentralization"
            className="w-full sm:w-2/3 h-auto rounded-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
