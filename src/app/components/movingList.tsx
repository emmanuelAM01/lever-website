import React from "react";

const SpinningList = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-[scroll_60s_linear_infinite_forwards] gap-4">
        {/* Repeat this block for each logo */}
        <h1 className="flex-shrink-0 text-lg text-white bg-gray-800 p-4 rounded-lg">
          Logo 1
        </h1>
        <h1 className="flex-shrink-0 text-lg text-white bg-gray-800 p-4 rounded-lg">
          Logo 2
        </h1>
        <h1 className="flex-shrink-0 text-lg text-white bg-gray-800 p-4 rounded-lg">
          Logo 3
        </h1>
        <h1 className="flex-shrink-0 text-lg text-white bg-gray-800 p-4 rounded-lg">
          Logo 4
        </h1>
        <h1 className="flex-shrink-0 text-lg text-white bg-gray-800 p-4 rounded-lg">
          Logo 5
        </h1>
         
      </div>
    </div>
  );
};

export default SpinningList;
