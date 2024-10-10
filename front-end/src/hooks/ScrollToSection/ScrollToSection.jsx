import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // Get the section from the hash in the URL (after #)
    const hash = location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}