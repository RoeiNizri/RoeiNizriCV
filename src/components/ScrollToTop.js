import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures the window scrolls to the top (Y-axis) and center (X-axis) of the page whenever the pathname changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    /**
     * Scrolls the window to the top (Y-axis) and center (X-axis) of the page.
     * The center is calculated based on the body's scroll width.
     */
    const scrollToTopAndCenter = () => {
      const totalWidth = document.body.scrollWidth;
      const centerX = totalWidth / 2;

      window.scrollTo({
        left: centerX,
        top: 0,
        behavior: 'smooth'
      });
    };

    // Ensure the function is executed after the DOM is fully loaded
    if (document.readyState === 'complete') {
      scrollToTopAndCenter();
    } else {
      window.addEventListener('load', scrollToTopAndCenter);
      return () => {
        window.removeEventListener('load', scrollToTopAndCenter);
      };
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
