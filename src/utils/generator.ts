/**
 * Generates a website HTML using Deepseek AI API based on user preferences
 */
import { toast } from "@/hooks/use-toast";

export const generateWebsiteHTML = async (
  prompt: string,
  websiteType: string,
  colorScheme: string,
  businessName: string = 'My Website'
): Promise<string> => {
  try {
    // Create the system message with instructions for Deepseek
    const systemMessage = `
      You are a professional web developer who creates clean, responsive HTML websites.
      Create a single HTML file with inline CSS for a ${websiteType} website with a ${colorScheme} color scheme.
      The website should be for: ${businessName ? businessName : "a default business"}
      The HTML should include:
      - Responsive design that works on mobile and desktop
      - Modern, clean aesthetics with the ${colorScheme} color scheme
      - A navigation menu
      - A compelling hero section
      - Features/services section
      - About section
      - Contact information
      - Footer with copyright
      - All CSS should be internal (in the <style> tag)
      - No external dependencies or libraries
      
      Only return valid HTML code with no explanation or additional text.
    `;

    // Create the user message with the prompt
    const userMessage = `${prompt}\n\nCreate a complete HTML website based on this description. Remember to use a ${colorScheme} color scheme and make it a ${websiteType} website${businessName ? " for " + businessName : ""}.`;

    // Call the Deepseek API
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-d4d4ecb485aa42838910dbc32b1b0496',
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const generatedHTML = data.choices[0]?.message?.content;
    
    if (!generatedHTML) {
      throw new Error('No content was generated');
    }

    // Extract the HTML content (in case Deepseek adds backticks or explanations)
    let cleanHTML = generatedHTML;
    // Remove any markdown code block indicators
    cleanHTML = cleanHTML.replace(/```html/g, '').replace(/```/g, '');
    
    return cleanHTML.trim();
  } catch (error) {
    console.error('Error generating website:', error);
    toast({
      title: "Generation failed",
      description: `${error instanceof Error ? error.message : "Unknown error occurred"}`,
      variant: "destructive"
    });
    // Return fallback HTML with error message
    return getFallbackHTML(businessName, prompt, error instanceof Error ? error.message : "Unknown error");
  }
};

// Fallback HTML in case of API errors
const getFallbackHTML = (
  businessName: string,
  description: string,
  errorMessage: string
): string => {
  // Get color values based on selected scheme
  const colors = getColorScheme('purple');
  
  // Generate the website title
  const title = businessName || getWebsiteTitle('business');
  
  // HTML template for the generated website
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    :root {
      --primary: ${colors.primary};
      --secondary: ${colors.secondary};
      --accent: ${colors.accent};
      --background: ${colors.background};
      --text: ${colors.text};
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    body {
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
    }
    
    header {
      background-color: var(--primary);
      padding: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
    
    .nav-links {
      display: flex;
      gap: 1.5rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    
    .nav-links a:hover {
      opacity: 0.8;
    }
    
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    
    .error-container {
      background-color: #fff1f2;
      border: 1px solid #fecdd3;
      padding: 1rem;
      border-radius: 4px;
      margin: 2rem 0;
    }

    .error-container h3 {
      color: #e11d48;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <div class="logo">${title}</div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>
  
  <main>
    <h1>Welcome to ${title}</h1>
    <p>This website will be about: ${description}</p>
    
    <div class="error-container">
      <h3>Error during generation</h3>
      <p>${errorMessage}</p>
      <p>Please try again or use a different prompt.</p>
    </div>
  </main>
  
  <footer>
    <div style="text-align: center; padding: 1rem; background-color: var(--primary); color: white;">
      <p>&copy; ${new Date().getFullYear()} ${title}. All rights reserved.</p>
      <p>Generated by CodeCanvas AI Website Generator</p>
    </div>
  </footer>
</body>
</html>
  `.trim();
};

/**
 * Returns a color scheme object based on the selected color
 */
const getColorScheme = (colorScheme: string) => {
  const schemes = {
    purple: {
      primary: '#6d28d9',
      secondary: '#8b5cf6',
      accent: '#7c3aed',
      background: '#faf5ff',
      text: '#1f2937'
    },
    blue: {
      primary: '#2563eb',
      secondary: '#3b82f6',
      accent: '#1d4ed8',
      background: '#eff6ff',
      text: '#1f2937'
    },
    teal: {
      primary: '#0d9488',
      secondary: '#14b8a6',
      accent: '#0f766e',
      background: '#f0fdfa',
      text: '#1f2937'
    },
    red: {
      primary: '#dc2626',
      secondary: '#ef4444',
      accent: '#b91c1c',
      background: '#fef2f2',
      text: '#1f2937'
    },
    orange: {
      primary: '#ea580c',
      secondary: '#f97316',
      accent: '#c2410c',
      background: '#fff7ed',
      text: '#1f2937'
    },
    green: {
      primary: '#16a34a',
      secondary: '#22c55e',
      accent: '#15803d',
      background: '#f0fdf4',
      text: '#1f2937'
    }
  };
  
  return schemes[colorScheme as keyof typeof schemes] || schemes.purple;
};

/**
 * Returns a default website title based on the website type
 */
const getWebsiteTitle = (websiteType: string): string => {
  const titles = {
    business: 'Innovative Solutions',
    portfolio: 'Creative Portfolio',
    ecommerce: 'Shop Online',
    blog: 'My Blog',
    landing: 'Awesome Product'
  };
  
  return titles[websiteType as keyof typeof titles] || 'My Website';
};
