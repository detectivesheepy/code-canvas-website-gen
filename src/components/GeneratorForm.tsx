
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Wand2, Loader2, Sparkles, Key } from "lucide-react";
import { generateWebsiteHTML } from "@/utils/generator";

const websiteTypes = [
  { value: "business", label: "Business" },
  { value: "portfolio", label: "Portfolio" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "blog", label: "Blog" },
  { value: "landing", label: "Landing Page" }
];

const colorSchemes = [
  { value: "purple", label: "Purple" },
  { value: "blue", label: "Blue" },
  { value: "teal", label: "Teal" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "green", label: "Green" }
];

const samplePrompts = [
  "A modern portfolio website for a photographer with a dark theme and minimalist design",
  "A business website for a tech startup with lots of animations and a purple color scheme",
  "A simple landing page for a mobile app with screenshots and download buttons",
  "An e-commerce site selling handmade jewelry with a warm, inviting color palette"
];

const GeneratorForm = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [websiteType, setWebsiteType] = useState("business");
  const [colorScheme, setColorScheme] = useState("purple");
  const [businessName, setBusinessName] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleGenerate = async () => {
    if (!prompt) {
      toast({
        title: "Description required",
        description: "Please describe the website you want to create",
        variant: "destructive"
      });
      return;
    }

    if (!apiKey) {
      toast({
        title: "API Key required",
        description: "Please enter your OpenAI API key",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    toast({
      title: "Generating website with OpenAI",
      description: "This may take up to 30 seconds...",
    });
    
    try {
      // Generate website HTML - using OpenAI now
      const websiteHTML = await generateWebsiteHTML(prompt, websiteType, colorScheme, businessName, apiKey);
      
      // Create a blob with the HTML content
      const blob = new Blob([websiteHTML], { type: 'text/html' });
      
      // Create a download link and trigger the download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${businessName || 'website'}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setIsGenerating(false);
      toast({
        title: "Website generated!",
        description: "Your custom website has been downloaded",
      });
    } catch (error) {
      console.error("Website generation failed:", error);
      setIsGenerating(false);
      toast({
        title: "Generation failed",
        description: "There was an error generating your website",
        variant: "destructive"
      });
    }
  };

  const useTemplate = (templatePrompt: string) => {
    setPrompt(templatePrompt);
  };

  return (
    <section className="py-32 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-600 mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            <span>AI-Powered Website Creation</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Create Your Website</h2>
          <p className="text-muted-foreground">
            Describe your ideal website and our AI will generate it for you in seconds.
          </p>
        </div>

        <Card className="shadow-lg animate-slide-up">
          <CardContent className="p-6">
            <Tabs defaultValue="prompt" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="prompt">Describe</TabsTrigger>
                <TabsTrigger value="advanced">Fine-tune</TabsTrigger>
              </TabsList>
              
              <TabsContent value="prompt" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Describe your website</Label>
                  <Textarea
                    id="prompt"
                    placeholder="E.g. A professional portfolio website with a dark theme for a graphic designer..."
                    className="min-h-[150px] resize-none"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Try one of these examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {samplePrompts.map((template, i) => (
                      <Button 
                        key={i} 
                        variant="outline" 
                        size="sm" 
                        onClick={() => useTemplate(template)}
                        className="text-xs"
                      >
                        {template.slice(0, 30)}...
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 border-t border-border pt-4 mt-4">
                  <Label htmlFor="api-key" className="flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    OpenAI API Key
                  </Label>
                  <Input
                    id="api-key"
                    type="password"
                    placeholder="Enter your OpenAI API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your API key is used only for this request and is never stored.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="website-type">Website Type</Label>
                    <Select value={websiteType} onValueChange={setWebsiteType}>
                      <SelectTrigger id="website-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {websiteTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="color-scheme">Color Scheme</Label>
                    <Select value={colorScheme} onValueChange={setColorScheme}>
                      <SelectTrigger id="color-scheme">
                        <SelectValue placeholder="Select colors" />
                      </SelectTrigger>
                      <SelectContent>
                        {colorSchemes.map((scheme) => (
                          <SelectItem key={scheme.value} value={scheme.value}>
                            {scheme.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business/Project Name</Label>
                  <Input 
                    id="business-name" 
                    placeholder="Enter the name of your business or project" 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2 border-t border-border pt-4 mt-4">
                  <Label htmlFor="advanced-api-key" className="flex items-center gap-2">
                    <Key className="h-4 w-4" />
                    OpenAI API Key
                  </Label>
                  <Input
                    id="advanced-api-key"
                    type="password"
                    placeholder="Enter your OpenAI API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your API key is used only for this request and is never stored.
                  </p>
                </div>
              </TabsContent>
              
              <Button 
                className="w-full mt-6" 
                size="lg"
                disabled={isGenerating} 
                onClick={handleGenerate}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating your website...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Website
                  </>
                )}
              </Button>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GeneratorForm;
