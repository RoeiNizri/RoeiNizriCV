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

  // Start of Tawk.to Script
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/66b9aafe0cca4f8a7a74cb7b/1i52k7su8';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);

  // Reload page if it doesn't load within 5 seconds
  const timeout = setTimeout(() => {
      window.location.reload();
  }, 5000);

  // Clear the timeout if the page loads successfully
  window.onload = function() {
      clearTimeout(timeout);
  };
});
