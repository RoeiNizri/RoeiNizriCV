const timeout = setTimeout(function() {
    window.location.reload();
  }, 5000);
  
  // Clear the timeout if the page loads successfully
  window.onload = function() {
    clearTimeout(timeout);
  };

// Load the main JavaScript file
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/static/js/main.4939a931.js';
document.head.appendChild(script);

// Redirect to the main site after a short delay
setTimeout(function() {
    window.location.href = window.location.origin;
}, 10000); // 10 seconds delay
