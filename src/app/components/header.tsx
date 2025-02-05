import React, { useState } from "react";
import FormPop from "./form";
const Whitepaper = "/leverWhitePaper.pdf";

const Header = ({ showButton }: { showButton: boolean }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control Form visibility

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleWhitePaper = () => {
    window.open(Whitepaper, "_blank");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0F0F0F] text-white shadow-md w-full">
        <div className="px-6 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold text-primary">LEVER</h1>
          {showButton && (
            <div className="flex flex-row gap-2">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black hover:text-gray-900 px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded-full font-medium transition-all transform duration-500"
                onClick={handleWhitePaper}
                style={{
                  transform: showButton ? "translateX(0)" : "translateX(100%)",
                  opacity: showButton ? 1 : 0,
                }}
              >
                Whitepaper
              </button>

              <button
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded-full font-medium transition-all transform duration-500"
                onClick={handleOpenForm} // Open the FormPop component
                style={{
                  transform: showButton ? "translateX(0)" : "translateX(100%)",
                  opacity: showButton ? 1 : 0,
                }}
              >
                Join Waitlist
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Render the FormPop Component */}
      <FormPop isOpen={isFormOpen} onClose={handleCloseForm} />
    </>
  );
};

export default Header;
