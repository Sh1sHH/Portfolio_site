import { useEffect, useState } from 'react';

const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.target-section');
      const scrollY = window.pageYOffset;

      // Viewport yüksekliğini al
      const viewportHeight = window.innerHeight;
      
      // En son görünen bölümü bulmak için değişken
      let currentSection = '';
      let maxVisiblePercentage = 0;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop;
        const sectionId = section.getAttribute('id');
        
        // Bölümün görünür kısmının yüzdesini hesapla
        const sectionBottom = sectionTop + sectionHeight;
        const visibleTop = Math.max(sectionTop, scrollY);
        const visibleBottom = Math.min(sectionBottom, scrollY + viewportHeight);
        
        // Görünür alan
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        // Görünür yüzde
        const visiblePercentage = (visibleHeight / sectionHeight) * 100;
        
        // Özel durum: footer için daha az görünürlük yeterli
        let threshold = 30; // Varsayılan eşik değeri
        if (sectionId === 'footer') {
          threshold = 15; // Footer için daha düşük eşik
        }
        
        // Eğer görünür yüzde eşik değerinden büyükse ve şimdiye kadarki en büyük değerden büyükse
        if (visiblePercentage > threshold && visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          currentSection = sectionId || '';
        }
      });

      // En çok görünen bölümü aktif olarak ayarla
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};

export default useScrollSpy; 