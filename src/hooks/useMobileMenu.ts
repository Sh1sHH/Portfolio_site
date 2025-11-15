import { useEffect, useState } from 'react';

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close menu if screen size is above 900px
      if (window.matchMedia('(min-width: 901px)').matches && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-is-open');
  };

  const closeMenu = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-is-open');
    }
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  };
};

export default useMobileMenu; 