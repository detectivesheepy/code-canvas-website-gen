
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Code, Palette, Gauge, Globe, Repeat, Smartphone, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Generation",
    description: "Describe your ideal website and watch as AI creates it in seconds, no coding required."
  },
  {
    icon: Code,
    title: "Clean Code Output",
    description: "Get production-ready code that's optimized for performance and easy to customize."
  },
  {
    icon: Palette,
    title: "Custom Styling",
    description: "Choose from beautiful color schemes or create your own unique branded look."
  },
  {
    icon: Gauge,
    title: "Lightning Fast",
    description: "Generate complete websites in seconds, not hours or days."
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Every site comes pre-configured with best practices for search engines."
  },
  {
    icon: Repeat,
    title: "Unlimited Iterations",
    description: "Not satisfied? Generate as many versions as you need until it's perfect."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "All websites look great on any device, from phones to desktops."
  },
  {
    icon: Sparkles,
    title: "Modern Frameworks",
    description: "Built with the latest technologies like React, Tailwind, and more."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create stunning websites without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardHeader className="pb-2">
                <feature.icon className="h-12 w-12 text-purple-500 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
