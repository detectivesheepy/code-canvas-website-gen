
import React from 'react';
import Header from '@/components/Header';
import GeneratorForm from '@/components/GeneratorForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/30">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <GeneratorForm />
      </main>
    </div>
  );
};

export default Index;
