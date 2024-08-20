// Load the main JavaScript file
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/static/js/main.4939a931.js';

// Once the script is loaded, proceed with the redirect
script.onload = function() {
    setTimeout(function() {
        window.location.href = window.location.origin;
    }, 10000); // 10 seconds delay
};

// Append the script to the head
document.head.appendChild(script);
