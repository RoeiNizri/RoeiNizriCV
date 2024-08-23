document.addEventListener("DOMContentLoaded", function() {
    var structuredData = {
        "@context": "http://schema.org",
        "@type": "Project",
        "name": "BTS | Blockchain Trading System",
        "alternateName": "Blockchain Technology Solutions",
        "url": "/BTS/",
        "image": "BTS-192x192.png",
        "description": "Explore Roei Nizri's BTS Project, focusing on advanced blockchain technology and smart contracts. Discover the innovative solutions and approaches used in this project, along with a detailed overview of its features and capabilities.",
        "creator": {
            "@type": "Person",
            "name": "Roei Nizri",
            "jobTitle": "Software Engineer & Full Stack Developer",
            "url": "./",
            "sameAs": [
                "https://www.linkedin.com/in/roeinizri",
                "https://github.com/RoeiNizri"
            ]
        }
    };
  
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  });

  const timeout = setTimeout(() => {
    window.location.reload();
  }, 5000);
  
  // Clear the timeout if the page loads successfully
  window.onload = function() {
    clearTimeout(timeout);
  };