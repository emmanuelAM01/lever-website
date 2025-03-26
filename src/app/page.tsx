// page.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import MovingList from "./components/movingList";
import Cards from "./components/cards";
import Bubbles from './components/bubbles';
import Form from './components/formSection';
import Footer from './components/footer';

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null!);
  const formRef = useRef<HTMLDivElement>(null!);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <Header isVisible={showHeader} scrollToForm={scrollToForm} />
      <Hero heroRef={heroRef} scrollToForm={scrollToForm} />
      <MovingList />
      <Cards />

      <Bubbles />
      <Form formRef={formRef} />
      <Footer />
    </div>
  );
};

export default Index;


//Copyright, Lever Labs, Inc.