// import React from "react";
// import Bubble from "./bubble"; // adjust path if needed


// const Bubbles = () => {
//   return (
//     <div className="relative px-6 sm:px-10 lg:px-32 py-10 min-h-screen border-b-black border-[1px]">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold leading-relaxed lg:leading-[1.5] tracking-wide text-center mb-[50px]">
//         At the Intersection of Bitcoin and Real-World Assets
//       </h1>

//       <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-4 lg:h-[550px] border-black border-[3px] ">
//       {/* Left Section */}
//         <div className="flex-1 p-6 md:p-12 text-white flex flex-col justify-end items-center md:items-start">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary text-center md:text-left">
//             2 Trillion
//           </h1>
//           {/* maybe animate number to look like its counting up, maybe even something with blocks because bitcoin blocks */}
//           <p className="text-md md:text-lg mt-2 text-center text-textSecondary  md:text-left">
//             Bitcoin's Market Cap Today
//           </p>
//         </div>

//         {/* Right Section with Circles */}
//         <div className="flex-1 relative grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center lg:block lg:mr-[100px]  ">
         
//         <Bubble
//   title="$100 Billion"
//   subtitle="Annual movie & entertainment market"
//   size="w-[120px] sm:w-[160px] lg:w-[225px]"
//   className="lg:absolute lg:right-[50%] lg:top-[3%]"
// />



//            <div className="aspect-square w-[140px] sm:w-[200px] lg:absolute lg:right-[0%] lg:top-[40%] lg:w-[300px] hover:scale-110 transition-transform duration-300">
//             <div className="flex h-full w-full items-center justify-center rounded-full shadow-xl text-center bg-white/50">
//               <div>
//                 <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-textPrimary">$300 Billion</h2>
//                 <p className="text-textSecondary text-xs sm:text-sm">Annual private credit market</p>
//               </div>
//             </div>
//           </div>

//            <div className="aspect-square w-[140px] sm:w-[140px] lg:absolute lg:bottom-[5%] lg:right-[80%] lg:w-[250px] hover:scale-110 transition-transform duration-300">
//             <div className="flex h-full w-full items-center justify-center rounded-full shadow-xl text-center bg-white/50">
//               <div>
//                 <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-textPrimary">$250 Billion</h2>
//                 <p className="text-textSecondary text-xs sm:text-sm">Annual data center market</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bubbles;

"use client";
import React from "react";

const Bubbles = () => {
  return (
    <div className="relative px-4 sm:px-10 lg:px-32 pt-10 pb-0 lg:pb-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-textSecondary text-center mb-6">
        Lever links Bitcoin to Real-World Assets
      </h1>

      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-4 lg:h-[550px] 
                      border border-gray-200 rounded-2xl pb-10 
                      bg-gradient-to-br from-[#F7F5F3] to-[#FFD6C2]">
        {/* Left Section */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-end items-center md:items-start">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-gray-900 text-center md:text-left">
            $2 Trillion
          </h1>
          <p className="text-sm sm:text-md md:text-lg mt-2 text-center text-gray-700 md:text-left">
            Bitcoin&apos;s Market Cap Today
          </p>
        </div>

        {/* Right Section with Bubbles */}
        <div className="flex-1 relative grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center lg:block lg:mr-[100px]">
          {/* Bubble 1 */}
          <div className="aspect-square w-[160px] sm:w-[160px] lg:absolute lg:right-[50%] lg:top-[3%] lg:w-[225px] transition-transform duration-300 hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full shadow-md bg-white/80 backdrop-blur-sm text-center p-4">
              <div>
                <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-gray-900">
                  $100 Billion
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Annual media market
                </p>
              </div>
            </div>
          </div>

          {/* Bubble 2 */}
          <div className="aspect-square w-[180px] sm:w-[200px] lg:absolute lg:right-[0%] lg:top-[40%] lg:w-[300px] transition-transform duration-300 hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full shadow-md bg-white/80 backdrop-blur-sm text-center p-4">
              <div>
                <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-gray-900">
                  $300 Billion
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Annual private credit market
                </p>
              </div>
            </div>
          </div>

          {/* Bubble 3 */}
          <div className="aspect-square w-[180px] sm:w-[140px] lg:absolute lg:bottom-[5%] lg:right-[80%] lg:w-[250px] transition-transform duration-300 hover:scale-110">
            <div className="flex h-full w-full items-center justify-center rounded-full shadow-md bg-white/80 backdrop-blur-sm text-center p-4">
              <div>
                <h2 className="font-extrabold text-sm sm:text-lg lg:text-xl text-gray-900">
                  $250 Billion
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Annual data center market
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
