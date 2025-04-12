
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Code, Download, Paintbrush } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockupImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop";

const PreviewSection = () => {
  const [activeDevice, setActiveDevice] = useState("desktop");
  const { toast } = useToast();

  const handleEditDesign = () => {
    toast({
      title: "Design Editor",
      description: "The design editor will be available in a future update.",
    });
  };

  const handleViewCode = () => {
    toast({
      title: "Code Viewer",
      description: "The code viewer will be available in a future update.",
    });
  };

  const handleExportWebsite = () => {
    toast({
      title: "Export Website",
      description: "Preparing website files for export...",
    });
    
    setTimeout(() => {
      toast({
        title: "Download Ready",
        description: "Your website has been exported successfully.",
      });
    }, 1500);
  };

  return (
    <section id="preview" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Preview Your Website</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how your website will look across different devices and make adjustments in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 animate-slide-up">
            <Card className="border-2 border-purple-200 shadow-lg overflow-hidden">
              <div className="p-2 bg-muted border-b flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                    {activeDevice === "desktop" ? "www.yourwebsite.com" : "m.yourwebsite.com"}
                  </Button>
                </div>
                <div className="flex space-x-1.5">
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast({ title: "Preview Mode", description: "You are currently in preview mode." })}>
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleViewCode}>
                    <Code className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className={`aspect-video lg:aspect-[16/9] overflow-hidden bg-background ${activeDevice === "mobile" ? "max-w-[320px] mx-auto" : ""}`}>
                <img
                  src={mockupImage}
                  alt="Website Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Customize Your Preview</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Device</label>
                    <Tabs defaultValue="desktop" onValueChange={setActiveDevice} className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="desktop">Desktop</TabsTrigger>
                        <TabsTrigger value="mobile">Mobile</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" onClick={handleEditDesign}>
                      <Paintbrush className="mr-2 h-4 w-4" />
                      Edit Design
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" onClick={handleViewCode}>
                      <Code className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    
                    <Button className="w-full justify-start" onClick={handleExportWebsite}>
                      <Download className="mr-2 h-4 w-4" />
                      Export Website
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">Design Stats</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Pages</span>
                        <span>5</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Components</span>
                        <span>12</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Images</span>
                        <span>8</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Load Time</span>
                        <span>0.8s</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
