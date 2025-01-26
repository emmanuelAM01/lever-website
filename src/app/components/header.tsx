import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0F0F0F] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Lever</h1>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium">
          Get Notified
        </button>
      </div>
    </header>
  );
};

export default Header;
