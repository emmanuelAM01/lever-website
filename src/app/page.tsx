"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import MovingList from "./components/movingList";
import Cards from "./components/cards";
import Bubbles from './components/bubbles';
import Footer from './components/footer';

const Index = () => {
  const [showHeroButton, setShowHeroButton] = useState(true);
  const heroRef = useRef<HTMLDivElement | null>(null); // It's safe to use null initially

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the Hero section is completely out of view
        if (!entry.isIntersecting) {
          // Hero section is completely out of view, show Header button
          setShowHeroButton(false);
        } else {
          // Hero section is still in view, show Hero button
          setShowHeroButton(true);
        }
      },
      {
        threshold: 0, // Trigger as soon as any part of Hero section goes off-screen
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] text-white">
      <Header showButton={!showHeroButton} />
      {/* Here we assert the type of heroRef to avoid the error */}
      <Hero showButton={showHeroButton} heroRef={heroRef as React.RefObject<HTMLDivElement>} />
      <MovingList />
      <Cards />
      <Bubbles />
      <Footer />
    </div>
  );
};

export default Index;
