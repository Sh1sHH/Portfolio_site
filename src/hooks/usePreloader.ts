import { useEffect } from 'react';

// Custom hook to handle preloader functionality
const usePreloader = () => {
  useEffect(() => {
    // Add preload class when component mounts
    document.documentElement.classList.add('ss-preload');

    // Function to hide preloader and show content
    const hidePreloader = () => {
      document.documentElement.classList.remove('ss-preload');
      document.documentElement.classList.add('ss-loaded');
      document.body.classList.add('ss-show');

      const preloader = document.querySelector('#preloader');
      if (preloader) {
        (preloader as HTMLElement).style.display = 'none';
      }
    };

    // Handle normal load event
    const handleLoad = () => {
      hidePreloader();
    };

    // Set a maximum timeout for preloader (3 seconds)
    const preloaderTimeout = setTimeout(() => {
      hidePreloader();
    }, 3000);

    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(preloaderTimeout);
    };
  }, []);
};

export default usePreloader; 