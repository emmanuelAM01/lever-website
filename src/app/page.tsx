import React from 'react';
import SpinningAsset from './components/SpinningAsset';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Future of
              <span className="text-primary"> Decentralized Finance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl">
              Experience the next generation of DeFi. Secure, transparent, and efficient financial solutions for everyone.
            </p>
            <button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              Get Started
            </button>
          </div>
          
          <div className="flex-1 flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <SpinningAsset />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#121212] py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#1E1E1E] rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Secure</h3>
              <p className="text-gray-400">Industry-leading security protocols ensure your assets are always safe.</p>
            </div>
            <div className="p-6 bg-[#1E1E1E] rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Transparent</h3>
              <p className="text-gray-400">Complete visibility of transactions for peace of mind.</p>
            </div>
            <div className="p-6 bg-[#1E1E1E] rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Efficient</h3>
              <p className="text-gray-400">High-speed processing with minimal fees for all users.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#0F0F0F] py-20">
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
