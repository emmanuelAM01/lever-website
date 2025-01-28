import React from "react";

const Bubbles = () => {
  return (
    <div className="relative px-5 lg:px-[175px] py-10 bg-black ">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-relaxed lg:leading-[1.5] tracking-wide text-center mb-[50px]">
        Lever sits at the Intersection of Lending and Tokenization
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 lg:h-[500px] border-[1px] rounded-[25px]">
        {/* Left Section */}
        <div className="flex-1 p-6 md:p-12 text-white flex flex-col justify-end items-center md:items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center md:text-left">
            $50 million
          </h1>
          <p className="text-md md:text-lg mt-2 text-center md:text-left">
            Real estate deals on Lever
          </p>
        </div>

        {/* Right Section with Circles */}
        <div className="flex-1 relative grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center lg:block lg:mr-[100px] mb-5">
          {/* Bitcoin Loan Market */}
          <div className="aspect-square w-[120px] sm:w-[160px] lg:absolute lg:right-[50%] lg:top-[6%] lg:w-[240px] hover:scale-110 transition-transform duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-full shadow-lg text-center bg-white">
              <div>
                <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-[#000]">$50 billion</h2>
                <p className="text-gray-500 text-xs sm:text-sm">Bitcoin Loan Market in 2030</p>
              </div>
            </div>
          </div>

          {/* Tokenized Assets */}
          <div className="aspect-square w-[140px] sm:w-[200px] lg:absolute lg:right-[5%] lg:top-[35%] lg:w-[300px] hover:scale-110 transition-transform duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-full shadow-lg text-center bg-white">
              <div>
                <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-[#000]">$2 trillion</h2>
                <p className="text-gray-500 text-xs sm:text-sm">Tokenized Assets by 2030</p>
              </div>
            </div>
          </div>

          {/* Annual Revenue Opportunity */}
          <div className="aspect-square w-[100px] sm:w-[140px] lg:absolute lg:bottom-[5%] lg:right-[75%] lg:w-[180px] hover:scale-110 transition-transform duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-full shadow-lg text-center bg-white">
              <div>
                <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-[#000]">$500 million</h2>
                <p className="text-gray-500 text-xs sm:text-sm">Annual revenue opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
