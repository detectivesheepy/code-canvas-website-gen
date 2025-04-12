
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, Github } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-purple-400" />
          <span className="font-bold text-xl">CodeCanvas</span>
        </div>
        <a 
          href="https://github.com/detectivesheepy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
          <span className="hidden md:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
