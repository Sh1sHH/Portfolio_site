import { useEffect } from 'react';

/**
 * Smooth scroll işlevselliği için hook
 * Tüm .smoothscroll sınıfına sahip bağlantıları yakalar ve tıklandığında
 * hedef elemana smooth scroll yapar
 */
const useSmoothScroll = () => {
  useEffect(() => {
    // Tüm smoothscroll bağlantılarını seç
    const smoothScrollLinks = document.querySelectorAll('.smoothscroll');
    
    const handleClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetID = target.getAttribute('href');
      
      // Eğer hedef bir ID ise (#about gibi)
      if (targetID && targetID.startsWith('#')) {
        const targetElement = document.querySelector(targetID);
        
        if (targetElement) {
          // Hedef elementin pozisyonunu hesapla
          // Header yüksekliği için offset - daha büyük bir değer kullanıyoruz
          const headerOffset = 100; 
          
          // Özel durumlar için offset ayarlamaları
          let adjustedOffset = headerOffset;
          
          // Footer için özel offset
          if (targetID === '#footer') {
            adjustedOffset = 20; // Footer için daha az offset
          }
          
          // Önce native scrollIntoView kullanmayı dene
          try {
            // ScrollIntoView yerine manuel scroll kullanıyoruz
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - adjustedOffset;
            
            // Smooth scroll yap
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            return;
          } catch (e) {
            console.log('Native scroll failed, using fallback');
            
            // Fallback olarak manuel scroll
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - adjustedOffset;
            
            // Smooth scroll yap
            smoothScrollTo(offsetPosition, 800);
          }
        }
      }
    };
    
    // Smooth scroll animasyonu için yardımcı fonksiyon
    const smoothScrollTo = (to: number, duration: number) => {
      const start = window.pageYOffset;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;
      
      const animateScroll = () => {
        currentTime += increment;
        const val = easeInOutCubic(currentTime, start, change, duration);
        window.scrollTo(0, val);
        
        if (currentTime < duration) {
          window.requestAnimationFrame(animateScroll);
        }
      };
      
      // Cubic easing in/out - daha akıcı animasyon
      const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      };
      
      window.requestAnimationFrame(animateScroll);
    };
    
    // Her bir bağlantıya click event listener ekle
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    // Cleanup
    return () => {
      smoothScrollLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
};

export default useSmoothScroll; 