import React, { useEffect } from 'react';
import usePreloader from '../hooks/usePreloader';
import useHeader from '../hooks/useHeader';
import useMobileMenu from '../hooks/useMobileMenu';
import useScrollSpy from '../hooks/useScrollSpy';
import useBackToTop from '../hooks/useBackToTop';
import useMoveTo from '../hooks/useMoveTo';
import useSmoothScroll from '../hooks/useSmoothScroll';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Initialize all custom hooks
  usePreloader();
  const { isSticky, isOffset, isScrolling } = useHeader();
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();
  const activeSection = useScrollSpy();
  const { isVisible: isBackToTopVisible, scrollToTop } = useBackToTop();
  
  // Her iki smooth scroll hook'unu da başlat
  // useMoveTo tarayıcı desteklemezse useSmoothScroll fallback olarak çalışacak
  useMoveTo();
  useSmoothScroll();
  
  // Smooth scroll için ek bir useEffect
  useEffect(() => {
    // Sayfa yüklendiğinde URL'de hash varsa, o bölüme smooth scroll yap
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 500); // Sayfa tamamen yüklendikten sonra scroll yapmak için biraz bekle
      }
    }
  }, []);
  
  // Aktif bölüme göre HTML'e data-current-section özelliği ekle
  useEffect(() => {
    if (activeSection) {
      document.documentElement.setAttribute('data-current-section', activeSection);
    }
  }, [activeSection]);

  // Initialize GLightbox with dynamic import
  useEffect(() => {
    let lightbox: any = null;
    
    const initGLightbox = async () => {
      try {
        // @ts-ignore - Dynamic import for GLightbox
        const GLightbox = (await import('glightbox')).default;
        
        lightbox = new GLightbox({
          selector: '.glightbox',
          zoomable: false,
          touchNavigation: true,
          loop: false,
          autoplayVideos: true
        });
      } catch (error) {
        console.error('GLightbox initialization error:', error);
      }
    };

    initGLightbox();

    return () => {
      if (lightbox && typeof lightbox.destroy === 'function') {
        try {
          lightbox.destroy();
        } catch (e) {
          console.error('GLightbox destroy error:', e);
        }
      }
    };
  }, []);

  return (
    <div id="page" className={`s-pagewrap ${isMenuOpen ? 'menu-is-open' : ''}`}>
      {/* Preloader */}
      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div />
          <div />
          <div />
        </div>
      </div>

      {/* Header */}
      <header className={`s-header ${isSticky ? 'sticky' : ''} ${isOffset ? 'offset' : ''} ${isScrolling ? 'scrolling' : ''}`}>
        <div className="row s-header__inner">
          <div className="s-header__block">
            <div className="s-header__logo">
              <a className="logo" href="index.html">
               {/* <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Homepage" />   Header logo.  */}
              </a>
            </div>
            <a 
              className={`s-header__menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} 
              href="#0"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
              }}
            >
              <span>Menu</span>
            </a>
          </div>
          
          <nav className="s-header__nav">    
            <ul className="s-header__menu-links">
              <li className={activeSection === 'intro' ? 'current' : ''}>
                <a className="smoothscroll" href="#intro" onClick={closeMenu}>Intro</a>
              </li>
              <li className={activeSection === 'about' ? 'current' : ''}>
                <a className="smoothscroll" href="#about" onClick={closeMenu}>About</a>
              </li>
              <li className={activeSection === 'works' ? 'current' : ''}>
                <a className="smoothscroll" href="#works" onClick={closeMenu}>Works</a>
              </li>
              <li className={activeSection === 'footer' ? 'current' : ''}>
                <a className="smoothscroll" href="#footer" onClick={closeMenu}>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Back to Top Button */}
      {isBackToTopVisible && (
        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top" onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}>                 
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/>
            </svg>
          </a>
          <span>Back To Top</span>
        </div>
      )}
    </div>
  );
};

export default Layout; 