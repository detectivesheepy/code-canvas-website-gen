
/**
 * Generates a simple HTML website based on user preferences
 */
export const generateWebsiteHTML = (
  prompt: string,
  websiteType: string,
  colorScheme: string,
  businessName: string = 'My Website'
): string => {
  // Get color values based on selected scheme
  const colors = getColorScheme(colorScheme);
  
  // Generate the website title
  const title = businessName || getWebsiteTitle(websiteType);
  
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
    
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 3rem 1rem;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }
    
    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: var(--text);
      opacity: 0.9;
      max-width: 700px;
    }
    
    .btn {
      display: inline-block;
      background-color: var(--accent);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: transform 0.2s, opacity 0.2s;
    }
    
    .btn:hover {
      transform: translateY(-2px);
      opacity: 0.9;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .feature-card {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
    }
    
    .feature-title {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }
    
    .content-section {
      margin: 3rem 0;
    }
    
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--primary);
    }
    
    footer {
      background-color: var(--primary);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
      margin-top: 3rem;
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      h1 {
        font-size: 2rem;
      }
      
      .subtitle {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <nav>
      <div class="logo">${title}</div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>
  
  <main>
    <section id="home" class="hero">
      <h1>Welcome to ${title}</h1>
      <p class="subtitle">${prompt}</p>
      <a href="#contact" class="btn">Get Started</a>
    </section>
    
    <section id="features" class="content-section">
      <h2>Our Features</h2>
      <div class="features">
        <div class="feature-card">
          <h3 class="feature-title">Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nunc eget tincidunt efficitur.</p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Feature 2</h3>
          <p>Suspendisse potenti. Cras fringilla ligula vel nisi facilisis, non dictum metus elementum.</p>
        </div>
        <div class="feature-card">
          <h3 class="feature-title">Feature 3</h3>
          <p>Sed fermentum massa nec neque convallis, at dictum neque venenatis. Duis placerat leo ac elit pharetra.</p>
        </div>
      </div>
    </section>
    
    <section id="about" class="content-section">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse potenti. Cras fringilla ligula vel nisi facilisis, non dictum metus elementum. Sed fermentum massa nec neque convallis, at dictum neque venenatis. Duis placerat leo ac elit pharetra, in commodo neque dictum.</p>
      <p>Nullam scelerisque, nunc eget tincidunt efficitur, nisl magna blandit eros, in commodo neque dictum ac. Suspendisse potenti. Cras fringilla ligula vel nisi facilisis, non dictum metus elementum.</p>
    </section>
    
    <section id="contact" class="content-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out to us using the information below.</p>
      <div style="margin-top: 1.5rem;">
        <p><strong>Email:</strong> info@${title.toLowerCase().replace(/\s+/g, '')}.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Website St, Internet City</p>
      </div>
    </section>
  </main>
  
  <footer>
    <div class="footer-content">
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
