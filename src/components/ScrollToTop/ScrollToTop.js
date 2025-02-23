import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure proper scroll reset
  }, [pathname]);

  return null;
};

export default ScrollToTop;
