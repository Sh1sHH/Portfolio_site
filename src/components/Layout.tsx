import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
// @ts-ignore
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import usePreloader from '../hooks/usePreloader.ts';
import useHeader from '../hooks/useHeader.ts';
import useMobileMenu from '../hooks/useMobileMenu.ts';
import useScrollSpy from '../hooks/useScrollSpy.ts';
import useBackToTop from '../hooks/useBackToTop.ts';

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

  // Initialize GLightbox
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      zoomable: false,
      touchNavigation: true,
      loop: false,
      autoplayVideos: true,
      svg: {
        close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>',
        prev: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.59 6L12 7.41 17.17 12l-5.17 5.17L10.59 18l6-6z"/></svg>'
      }
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);

  // Initialize Swiper
  useEffect(() => {
    // @ts-ignore - Swiper tiplerini görmezden geliyoruz
    const testimonialsSwiper = new Swiper('.s-testimonials__slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        401: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        801: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1181: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });

    return () => {
      if (testimonialsSwiper) {
        // @ts-ignore
        testimonialsSwiper.destroy();
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
                <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Homepage" />
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