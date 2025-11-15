declare module 'glightbox' {
  interface GLightboxOptions {
    selector?: string;
    elements?: any[];
    skin?: string;
    closeButton?: boolean;
    startAt?: number;
    autoplayVideos?: boolean;
    autofocusVideos?: boolean;
    descPosition?: 'top' | 'bottom' | 'left' | 'right';
    zoomable?: boolean;
    draggable?: boolean;
    dragToleranceX?: number;
    dragToleranceY?: number;
    dragAutoSnap?: boolean;
    preload?: boolean;
    touchNavigation?: boolean;
    touchFollowAxis?: boolean;
    keyboardNavigation?: boolean;
    closeOnOutsideClick?: boolean;
    loop?: boolean;
    slideHTML?: string;
    svg?: {
      close?: string;
      prev?: string;
      next?: string;
    };
    openEffect?: string;
    closeEffect?: string;
    slideEffect?: string;
    moreText?: string;
    moreLength?: number;
    cssEfects?: {
      [key: string]: {
        in: string;
        out: string;
      };
    };
    lightboxHTML?: string;
    slideHtml?: string;
  }

  class GLightbox {
    constructor(options?: GLightboxOptions);
    open(): void;
    close(): void;
    destroy(): void;
    reload(): void;
    next(): void;
    prev(): void;
    goToSlide(index: number): void;
  }

  export = GLightbox;
} 