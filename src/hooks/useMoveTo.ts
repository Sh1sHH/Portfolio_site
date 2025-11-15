import { useEffect } from 'react';

/**
 * MoveTo kütüphanesini kullanarak gelişmiş smooth scroll işlevselliği sağlayan hook
 */
const useMoveTo = () => {
  useEffect(() => {
    // Ease fonksiyonları - daha akıcı animasyonlar için
    const easeFunctions = {
      easeInQuad: function (t: number, b: number, c: number, d: number) {
        t /= d;
        return c * t * t + b;
      },
      easeOutQuad: function (t: number, b: number, c: number, d: number) {
        t /= d;
        return -c * t * (t - 2) + b;
      },
      easeInOutQuad: function (t: number, b: number, c: number, d: number) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      },
      easeInOutCubic: function (t: number, b: number, c: number, d: number) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
      },
      // Daha akıcı bir animasyon için yeni ease fonksiyonu
      smootherStep: function(t: number, b: number, c: number, d: number) {
        t /= d;
        // Smootherstep formula: 6x^5 - 15x^4 + 10x^3
        t = t * t * t * (t * (t * 6 - 15) + 10);
        return b + c * t;
      }
    };

    // MoveTo sınıfı
    class MoveTo {
      private options: any;
      private easeFunctions: any;

      constructor(options = {}, easeFunctions = {}) {
        this.options = Object.assign({
          tolerance: 0,
          duration: 800,
          easing: 'easeOutQuad',
          container: window
        }, options);

        this.easeFunctions = Object.assign({}, easeFunctions);
      }

      move(target: number | HTMLElement) {
        if (typeof target === 'number') {
          this.scrollTo(target);
          return;
        }

        const elem = target as HTMLElement;
        const targetPosition = this.getTargetPosition(elem);
        this.scrollTo(targetPosition);
      }

      scrollTo(targetPosition: number) {
        const container = this.options.container;
        const startPosition = container === window ? container.pageYOffset : container.scrollTop;
        
        // Hedef elementin ID'sine göre offset ayarla
        let headerOffset = 100; // Varsayılan offset
        
        // Özel durumlar için offset ayarlamaları
        const currentTarget = document.activeElement;
        if (currentTarget && currentTarget instanceof HTMLAnchorElement) {
          const href = currentTarget.getAttribute('href');
          if (href === '#footer') {
            headerOffset = 20; // Footer için daha az offset
          } else if (href === '#works') {
            headerOffset = 80; // Works için standart offset
          } else if (href === '#about') {
            headerOffset = 100; // About için biraz daha fazla offset
          }
        }
        
        const adjustedPosition = targetPosition - headerOffset;
        
        // Performans için native smooth scroll kullanmayı dene önce
        if ('scrollBehavior' in document.documentElement.style) {
          try {
            if (container === window) {
              container.scrollTo({
                top: adjustedPosition,
                behavior: 'smooth'
              });
              return;
            }
          } catch (e) {
            // Native smooth scroll çalışmazsa, kendi animasyonumuzu kullanacağız
            console.log('Native smooth scroll failed, using custom animation');
          }
        }
        
        // Kendi animasyonumuzu kullan
        this.animate(startPosition, adjustedPosition);
      }

      getTargetPosition(element: HTMLElement) {
        const container = this.options.container;
        const topOfElement = element.getBoundingClientRect().top;
        
        return topOfElement + (container === window ? window.pageYOffset : container.scrollTop);
      }

      animate(start: number, end: number) {
        const container = this.options.container;
        const startTime = performance.now();
        const duration = this.options.duration;
        const easeFunction = this.easeFunctions[this.options.easing];

        // Animasyon için daha yüksek frame rate
        const step = (timestamp: number) => {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const position = easeFunction(progress, start, end - start, 1);

          if (container === window) {
            container.scrollTo(0, position);
          } else {
            container.scrollTop = position;
          }

          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      }

      registerTrigger(trigger: HTMLElement) {
        if (!trigger) return;

        const href = trigger.getAttribute('href');
        if (!href || !href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target) return;

        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.move(target as HTMLElement);
        });
      }
    }

    // MoveTo'yu başlat - daha uzun süre ve daha akıcı easing
    const moveTo = new MoveTo({
      tolerance: 0,
      duration: 800, // Daha kısa süre daha akıcı hissedebilir
      easing: 'smootherStep', // Yeni eklediğimiz daha akıcı easing fonksiyonu
      container: window
    }, easeFunctions);

    // Tüm smoothscroll bağlantılarını seç ve kaydet
    const triggers = document.querySelectorAll('.smoothscroll');
    triggers.forEach((trigger) => {
      moveTo.registerTrigger(trigger as HTMLElement);
    });

    // Ayrıca native smooth scroll için tüm bağlantılara event listener ekle
    const handleNativeScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Cleanup
    return () => {};
  }, []);
};

export default useMoveTo; 