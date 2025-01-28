import React, { useState } from "react";
import FormPop from "./form";

const Header = ({ showButton }: { showButton: boolean }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control Form visibility

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0F0F0F] text-white shadow-md w-full">
        <div className="px-6 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-bold text-primary">LEVER</h1>
          {showButton && (
            <button
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform duration-500"
              onClick={handleOpenForm} // Open the FormPop component
              style={{
                transform: showButton ? "translateX(0)" : "translateX(100%)",
                opacity: showButton ? 1 : 0,
              }}
            >
              Join Waitlist
            </button>
          )}
        </div>
      </header>

      {/* Render the FormPop Component */}
      <FormPop isOpen={isFormOpen} onClose={handleCloseForm} />
    </>
  );
};

export default Header;
