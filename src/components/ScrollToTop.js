import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the total width of the page
    const totalWidth = document.body.scrollWidth;

    // Calculate the center position for the X-axis
    const centerX = totalWidth / 2;

    // Scroll to the center position on the X-axis and the top position on the Y-axis
    window.scrollTo(centerX, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
