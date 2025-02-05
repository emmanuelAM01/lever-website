import React, { useState } from "react";
import SpinningAsset from "./SpinningLever";
import FormPop from "./form";
const Whitepaper = "/leverWhitepaper.pdf";

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

  const handleWhitePaper = () => {
    window.open(Whitepaper, "_blank");
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
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              Lever transforms idle Bitcoin into productive capital by{" "}
              <span className="hidden lg:inline-block">
                <br />
              </span>
              connecting treasuries with real-world investments.
            </p>

            {showButton && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 mx-auto justify-center ">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black hover:text-gray-900 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg rounded-full font-medium transition-all transform duration-500"
                  onClick={handleWhitePaper}
                  style={{
                    transform: showButton ? "translateX(0)" : "translateX(100%)",
                    opacity: showButton ? 1 : 0,
                  }}
                >
                  Whitepaper
                </button>

                <button
                  onClick={handleOpenForm} // Open the form when clicked
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg rounded-full"
                >
                  Join Waitlist
                </button>
              </div>
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
