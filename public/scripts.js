document.addEventListener("DOMContentLoaded", function () {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "רועי נזרי",
    "alternateName": "רועי ניזרי",
    "jobTitle": "תוכניתן ופול סטאק",
    "description": "רועי נזרי | תוכניתן ופול סטאק | רועי ניזרי | רועי נזרי אתרים",
    "url": "https://roeinizri.com",
    "sameAs": [
      "https://www.linkedin.com/in/roeinizri",
      "https://github.com/RoeiNizri"
    ],
    "image": "https://roeinizri.com/roeinizri-192x192.png",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "המכללה האקדמית להנדסה בראודה"
    }
  };

  if (!document.querySelector('script[type="application/ld+json"]')) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    console.log('Structured data added successfully.');
  }
});

let reloadAttempts = sessionStorage.getItem('reloadAttempts') || 0;

if (reloadAttempts < 3) {
  const timeout = setTimeout(() => {
    if (!document.querySelector('#root')) {
      console.warn('Critical elements not loaded. Reloading...');
      reloadAttempts++;
      sessionStorage.setItem('reloadAttempts', reloadAttempts);
      window.location.reload();
    }
  }, 8000); // Adjust timeout duration if needed

  window.onload = () => {
    clearTimeout(timeout);
    sessionStorage.setItem('reloadAttempts', 0); // Reset attempts on successful load
    console.log('Page loaded successfully.');
  };
} else {
  console.error('Max reload attempts reached. Please check your connection.');
}