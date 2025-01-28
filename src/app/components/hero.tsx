import React, { useState } from "react";
import SpinningAsset from "./SpinningLever";
import FormPop from "./form";

const Hero = ({
  showButton,
  heroRef,
}: {
  showButton: boolean;
  heroRef: React.RefObject<HTMLDivElement>;
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control Form visibility

  const handleOpenForm = () => {
    setIsFormOpen(true); // Open the form modal
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form modal
  };

  return (
    <>
      <div
        ref={heroRef}
        className="relative w-full h-screen bg-[#1A1A1A] py-12 lg:py-20 flex items-center justify-center"
      >
        {/* Animation behind the text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <SpinningAsset />
        </div>

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Centered Content */}
        <div className="relative z-20 w-full px-4 flex flex-col lg:flex-col items-center justify-center gap-12 text-center">
          <div className="flex-1 space-y-8 max-w-lg lg:max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-relaxed lg:leading-[1.5] tracking-wide">
              Bringing Commonsense Yield to
              <span className="text-primary"> Bitcoin </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed lg:leading-[1.5]">
              Lever transforms idle Bitcoin into productive capital by <br />
              connecting treasuries with real world investments.
            </p>
            {showButton && (
              <button
                onClick={handleOpenForm} // Open the form when clicked
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full"
              >
                Join Waitlist
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FormPop Component */}
      <FormPop isOpen={isFormOpen} onClose={handleCloseForm} />
    </>
  );
};

export default Hero;
