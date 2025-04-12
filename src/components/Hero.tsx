
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-600 mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            <span>AI-Powered Website Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Create beautiful websites with <span className="text-gradient">AI magic</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Turn your ideas into stunning websites in seconds. Just describe what you want, and let our AI do the rest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2">
              Create your website
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              See examples
            </Button>
          </div>
          
          <div className="pt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Ready in seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fully customizable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
