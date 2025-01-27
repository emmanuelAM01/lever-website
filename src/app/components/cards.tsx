import React from 'react';

const Cards = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">
        A Simple, Compliant, and Refreshing Experience
      </h1>


    <div className="flex flex-col lg:flex-row gap-4 h-[500px] mb-10">
        {/* Right side with light color */}
        <div className="flex-1 bg-accent-2 p-12 flex flex-col justify-center text-white">
            {/* Add your content here for the right side */}
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
            Stuff here for the right side of the full width card
            </p>
        </div>
        <div className="flex-1 bg-gray-800 p-12 flex flex-col justify-center items-start text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Bitcoin Collateralized Loans
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            Deposit BTC into an escrow (via Collar) to borrow USD tokens at sub 5% interest.
            </p>
        </div>
    </div>



    <div className="flex flex-col lg:flex-row gap-4 h-[500px] mb-10">
  {/* Left side with dark grey color */}
  <div className="flex-1 bg-gray-800 p-12 flex flex-col justify-center text-white">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
      Real World Investments
    </h2>
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
      Access real estate deals, like a Hyatt in Tuscany, on Globacap's regulated marketplace.
    </p>
  </div>

  {/* Right side with light color */}
  <div className="flex-1 bg-accent-2 p-12 flex flex-col justify-center text-white">
    {/* Add your content here for the right side */}
    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
      Stuff here for the right side of the full width card
    </p>
  </div>
</div>


<div className="flex flex-col lg:flex-row gap-4 h-[500px] mb-10">
        {/* Right side with light color */}
        <div className="flex-1 bg-accent-2 p-12 flex flex-col justify-center text-white">
            {/* Add your content here for the right side */}
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
            Stuff here for the right side of the full width card
            </p>
        </div>
        <div className="flex-1 bg-gray-800 p-12 flex flex-col justify-center items-start text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            Commonsense Diversification

            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            Unlock crypto-uncorrelated yield, without selling BTC, through tangible businesses (not staking).
            </p>
        </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-4 h-[500px] mb-10">
  {/* Left side with dark grey color */}
  <div className="flex-1 bg-gray-800 p-12 flex flex-col justify-center text-white">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
    Gradual decentralization
    </h2>
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
    Starting with bespoke fundraises, building toward an asset-agnostic, DeFi future.
    </p>
  </div>

  {/* Right side with light color */}
  <div className="flex-1 bg-accent-2 p-12 flex flex-col justify-center text-white">
    {/* Add your content here for the right side */}
    <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
      Stuff here for the right side of the full width card
    </p>
  </div>
</div>




    </div>
  );
};

export default Cards;
