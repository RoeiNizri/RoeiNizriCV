import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures the window scrolls to the top (Y-axis) of the page whenever the pathname changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    /**
     * Scrolls the window to the top (Y-axis) of the page.
     */
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Ensure the function is executed after the pathname changes
    scrollToTop();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
