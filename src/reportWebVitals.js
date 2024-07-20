const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Collect and report all Core Web Vitals metrics
        getCLS(onPerfEntry); // Cumulative Layout Shift
        getFID(onPerfEntry); // First Input Delay
        getFCP(onPerfEntry); // First Contentful Paint
        getLCP(onPerfEntry); // Largest Contentful Paint
        getTTFB(onPerfEntry); // Time to First Byte
      })
      .catch((error) => {
        console.error('Failed to load web-vitals', error);
      });
  } else {
    console.warn('onPerfEntry is not a function or not provided');
  }
};

export default reportWebVitals;
