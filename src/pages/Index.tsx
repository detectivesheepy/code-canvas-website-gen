
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GeneratorForm from '@/components/GeneratorForm';
import Preview from '@/components/Preview';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <GeneratorForm />
        <Preview />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
