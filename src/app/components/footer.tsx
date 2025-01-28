import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full min-h-[500px] bg-[#1A1A1A] py-12 lg:py-20 flex items-center justify-center bg-black">
      {/* Semi-transparent overlay */}

      {/* Centered Content */}
      <div className="relative z-20 w-full px-4 flex flex-col items-center justify-center gap-12 text-center">
        <div className="flex-1 max-w-lg lg:max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-relaxed lg:leading-[1.5] tracking-wide">
            The Convergence of 
            <span className="text-primary"> Bitcoin and Real World Assets </span>
            will Unleash a Trillion-Dollar Transformation.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
