"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";
import MovingList from "./components/sections/movingList";
import Cards from "./components/sections/cards";
import Bubbles from "./components/sections/bubbles";
import Form from "./components/sections/formSection";
import Footer from "./components/sections/footer";

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null!);
  const formRef = useRef<HTMLDivElement>(null!);
  const cardsRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When less than 50% of the hero is visible, show the header buttons.
        setShowHeader(entry.intersectionRatio < 0.5);
      },
      { threshold: [0, 0.5] }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-background relative">
      <Header isVisible={showHeader} scrollToForm={scrollToForm} />
      <Hero
        heroRef={heroRef}
        scrollToForm={scrollToForm}
        scrollToCards={scrollToCards}
      />

        <MovingList />

      <div ref={cardsRef}>
        <Cards />
      </div>
      
      <Bubbles />
      <Form formRef={formRef} />
      <Footer />
    </div>
  );
};

export default Index;
