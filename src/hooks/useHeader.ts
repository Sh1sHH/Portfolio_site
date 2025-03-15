import { useEffect, useState } from 'react';

interface HeaderState {
  isSticky: boolean;
  isOffset: boolean;
  isScrolling: boolean;
}

const useHeader = () => {
  const [headerState, setHeaderState] = useState<HeaderState>({
    isSticky: false,
    isOffset: false,
    isScrolling: false
  });

  useEffect(() => {
    let triggerHeight = 0;

    // Set initial trigger height
    const setTriggerHeight = () => {
      const hero = document.querySelector('#intro') as HTMLElement;
      if (hero) {
        triggerHeight = hero.offsetHeight - 170;
      }
    };

    // Set initial height after a short delay
    setTimeout(setTriggerHeight, 300);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHeaderState({
        isSticky: scrollY > triggerHeight,
        isOffset: scrollY > triggerHeight + 20,
        isScrolling: scrollY > triggerHeight + 150
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return headerState;
};

export default useHeader; 