import { useEffect } from 'react';

// Custom hook to handle preloader functionality
const usePreloader = () => {
  useEffect(() => {
    // Add preload class when component mounts
    document.documentElement.classList.add('ss-preload');

    // Remove preload class and add loaded class when everything is loaded
    const handleLoad = () => {
      document.documentElement.classList.remove('ss-preload');
      document.documentElement.classList.add('ss-loaded');
      document.body.classList.add('ss-show');

      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
};

export default usePreloader; 