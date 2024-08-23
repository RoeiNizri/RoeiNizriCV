document.addEventListener("DOMContentLoaded", function() {
  var structuredData = {
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

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
});
const timeout = setTimeout(function() {
    window.location.reload();
  }, 5000);
  
  // Clear the timeout if the page loads successfully
  window.onload = function() {
    clearTimeout(timeout);
  };