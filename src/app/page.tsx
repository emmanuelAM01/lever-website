import React from "react";
import Header from "./components/header";
import SpinningLever from "./components/SpinningLever";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-hidden snap-y snap-mandatory">
      <Header />
      {/* Lever Section */}
      <div className="flex flex-col justify-center items-center h-screen snap-start">
        <SpinningLever />
        <h1 className="text-4xl md:text-6xl font-bold mt-8 text-center">
          Lever Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-md mt-4">
          Deploying Bitcoin in the Real World
        </p>
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full mt-6">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-[#121212] py-16 snap-start">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How it operates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1E1E1E] rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Collateralize</h3>
              <p className="text-gray-400">Deposit BTC</p>
            </div>
            <div className="p-6 bg-[#1E1E1E] rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Borrow/Invest</h3>
              <p className="text-gray-400">Borrow stables and invest into RWA tokens</p>
            </div>
            <div className="p-6 bg-[#1E1E1E] rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Earn Yield</h3>
              <p className="text-gray-400">Putting a crypto face to traditional finance methods.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#0F0F0F] py-20 snap-start">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Future of Finance?
          </h2>
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
