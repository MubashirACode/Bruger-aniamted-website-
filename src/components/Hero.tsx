import { useEffect, useRef, useState } from 'react';
import { ThumbnailStrip, BURGER_ITEMS, BurgerThumbnail } from './ThumbnailStrip';

export const VIDEO_URL =
  'https://res.cloudinary.com/dyg5fwjnx/video/upload/v1792132282/Burger_layers_floating_in_dark_20261016113021_y7xqxd.mp4';
export const POSTER_URL =
  'https://res.cloudinary.com/dyg5fwjnx/video/upload/v1792132282/Burger_layers_floating_in_dark_20261016113021_y7xqxd.jpg';

interface HeroProps {
  onOrderNow: (burger: BurgerThumbnail) => void;
  onViewMenu: () => void;
}

export function Hero({ onOrderNow, onViewMenu }: HeroProps) {
  const [activeBurger, setActiveBurger] = useState<BurgerThumbnail>(BURGER_ITEMS[0]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Guarantee autoplay and handle touch retry for strict browsers (e.g., iOS Safari)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const attemptPlay = () => {
      video.play().catch((err) => {
        console.warn('Autoplay initially blocked or postponed:', err);
      });
    };

    attemptPlay();

    // Retry once on first user interaction if blocked by browser policy
    const handleFirstTouch = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('pointerdown', handleFirstTouch);
    };

    window.addEventListener('touchstart', handleFirstTouch, { passive: true });
    window.addEventListener('pointerdown', handleFirstTouch, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('pointerdown', handleFirstTouch);
    };
  }, [prefersReducedMotion]);

  // Performance: Pause video when hero is out of viewport or tab is hidden, resume when visible
  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero || prefersReducedMotion) return;

    // Visibility change handler
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        // Only resume if hero is also in view
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          video.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver handler
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !document.hidden) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  // Monitor scroll for scroll indicator fading out (> 40px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger entrance animations after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full bg-[#0B1220] text-white overflow-hidden lg:h-[100svh] lg:min-h-[700px] flex flex-col justify-between"
      style={{ backgroundColor: '#0B1220' }}
      aria-label="Burger Haven Hero"
    >
      {/* 
        ========================================================================
        VIDEO BACKGROUND CONTAINER
        - Desktop: Absolute inset-0 filling 100% of hero, burger positioned right
        - Mobile/Tablet (< 1024px): Sits at the top in a 16:9 stacked aspect box
        - ABSOLUTELY ZERO OVERLAY, NO SCRIM, NO GRADIENT, NO TINT, OPACITY = 1
        ========================================================================
      */}
      <div className="lg:absolute lg:inset-0 w-full h-auto lg:h-full z-0 order-1 lg:order-none overflow-hidden bg-[#0B1220]">
        {prefersReducedMotion ? (
          <img
            src={POSTER_URL}
            alt="Burger Haven Gourmet Burger with floating layers"
            className="w-full h-auto aspect-video lg:h-full lg:w-full object-cover object-[right_center] block"
          />
        ) : (
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={POSTER_URL}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload noplaybackrate"
            aria-hidden="true"
            className="w-full h-auto aspect-video lg:h-full lg:w-full object-cover object-[right_center] block"
            style={{
              opacity: 1,
              filter: 'none',
              transform: 'none',
            }}
          />
        )}
      </div>

      {/* 
        ========================================================================
        HERO CONTENT CONTAINER
        - Desktop: Left-aligned (~45% width), vertically centered, z-index 20
        - Mobile/Tablet: Order-2 below the top video on solid #0B1220 background
        - Subtle text-shadow for readability without any video overlay
        ========================================================================
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-8 pb-12 lg:py-0 order-2 lg:order-none pointer-events-none">
        <div className="w-full lg:w-[48%] xl:w-[45%] max-w-xl pointer-events-auto">
          {/* 1. Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-3.5 transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <span
              className="h-[2px] w-7 bg-[#F28C28] rounded-full"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#F28C28] uppercase font-body drop-shadow-sm">
              FRESH. BOLD. UNFORGETTABLE.
            </span>
          </div>

          {/* 2. Main Heading */}
          <h1
            className={`font-display text-[clamp(2.75rem,5.6vw,5rem)] leading-[0.92] tracking-wider font-extrabold uppercase text-white mb-4 transition-all duration-700 delay-100 ease-out [text-shadow:0_2px_14px_rgba(11,18,32,0.85)]`}
            style={{
              textWrap: 'balance',
            }}
          >
            FLAVOURFUL MOMENTS AT OUR{' '}
            <span className="text-[#F28C28] drop-shadow-[0_2px_12px_rgba(242,140,40,0.35)]">
              BURGER HAVEN
            </span>
          </h1>

          {/* Active selection small label indicator */}
          <div
            className={`mb-3.5 flex items-center gap-2 text-xs font-medium text-[#FFC83D] transition-all duration-700 delay-150 ease-out ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC83D]" />
            <span>
              Selected Cut: <strong className="text-white">{activeBurger.name}</strong> ({activeBurger.price})
            </span>
            <span className="text-[#B8C0CC]/60">·</span>
            <span className="text-[#B8C0CC]">{activeBurger.calories}</span>
          </div>

          {/* 3. Description */}
          <p
            className={`text-sm sm:text-base text-[#B8C0CC] leading-relaxed max-w-[480px] mb-7 sm:mb-8 font-body transition-all duration-700 delay-200 ease-out [text-shadow:0_1px_8px_rgba(11,18,32,0.8)] ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            Bite into a symphony of flavours at our Burger Haven, where every bite
            is a delightful journey. From classic favourites to mouth-watering
            innovations, we craft burgers that redefine satisfaction.
          </p>

          {/* 4. Action Buttons */}
          <div
            className={`flex flex-wrap items-center gap-4 sm:gap-6 mb-7 sm:mb-8 transition-all duration-700 delay-300 ease-out ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Primary Order Now Button */}
            <button
              type="button"
              onClick={() => onOrderNow(activeBurger)}
              className="group relative inline-flex items-center justify-center min-h-[46px] sm:min-h-[50px] px-8 sm:px-9 rounded-full bg-[#F28C28] text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_0_24px_rgba(242,140,40,0.4)] hover:bg-[#FFA64D] hover:shadow-[0_0_34px_rgba(255,166,77,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F28C28] focus-visible:ring-offset-[#0B1220] cursor-pointer"
            >
              <span>Order Now</span>
              <svg
                className="w-4 h-4 ml-2 fill-current transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* View Menu Text Link */}
            <button
              type="button"
              onClick={onViewMenu}
              className="group relative inline-flex items-center gap-2 py-2 text-sm sm:text-base font-semibold text-white hover:text-[#FFA64D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] rounded cursor-pointer"
            >
              <span>View Menu</span>
              <svg
                className="w-4 h-4 stroke-current stroke-2 fill-none transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              {/* Subtle hover underline */}
              <span
                className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-[#F28C28] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* 5. Trust Row */}
          <div
            className={`flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#B8C0CC] mb-8 lg:mb-6 transition-all duration-700 delay-400 ease-out ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-1.5 font-medium text-white">
              {/* Star rating icon */}
              <svg
                className="w-4 h-4 fill-[#FFC83D] shrink-0"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9 rating</span>
            </div>
            <span className="text-[#141F36] font-bold" aria-hidden="true">
              |
            </span>
            <span className="font-medium text-white">10,000+ happy customers</span>
            <span className="text-[#141F36] font-bold" aria-hidden="true">
              |
            </span>
            <span className="font-medium text-[#FFC83D]">Fresh daily</span>
          </div>

          {/* 
            ====================================================================
            BOTTOM THUMBNAIL STRIP (LEFT SIDE)
            - Placed strictly on the left side so it NEVER covers the burger!
            ====================================================================
          */}
          <div
            className={`transition-all duration-700 delay-500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <ThumbnailStrip
              activeId={activeBurger.id}
              onSelect={(burger) => setActiveBurger(burger)}
            />
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        SCROLL INDICATOR (Bottom Center)
        - Sits at the bottom center, fades out cleanly once user scrolls 40px
        ========================================================================
      */}
      <div
        className={`hidden lg:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 pointer-events-none transition-opacity duration-300 ${
          scrolledPast ? 'opacity-0' : 'opacity-80 hover:opacity-100'
        }`}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B8C0CC]/80">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-[#B8C0CC]/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#F28C28] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
