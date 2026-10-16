import { useEffect, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { BURGER_LAYERS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function FreshIngredientsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handler);
    return () => motionQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0B1220] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#F28C28]/7 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          pill="BUILT WITH CARE"
          heading="Every Layer Matters"
          subtext="We never cut corners. Each layer is chosen, prepared and stacked fresh, so every bite tastes the way it should."
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        {/* 
          Two columns:
          - Exploded burger image on one side (with soft orange glow and gentle floating animation)
          - Numbered list of 7 layers on other side
          - On mobile: image comes first, then list
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Exploded Burger Image (Order 1 on mobile) */}
          <div className="lg:col-span-5 order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-[28px] overflow-hidden bg-[#0B1220] p-4 flex items-center justify-center">
              {/* Soft orange halo behind exploded image */}
              <div
                className="absolute inset-4 rounded-full bg-[#F28C28]/25 blur-[60px] pointer-events-none"
                aria-hidden="true"
              />

              <img
                src="/images/burger-layers.jpg"
                alt="Exploded view of Burger Haven fresh layers"
                width={600}
                height={600}
                loading="lazy"
                className={`relative z-10 w-full h-full object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${
                  !prefersReducedMotion ? 'animate-[float_4s_ease-in-out_infinite]' : ''
                }`}
                style={{
                  animation: !prefersReducedMotion
                    ? 'burgerFloat 4s ease-in-out infinite'
                    : 'none',
                }}
              />
            </div>
          </div>

          {/* Column 2: 7 Layers Numbered List (Order 2 on mobile) */}
          <div className="lg:col-span-7 order-2 space-y-3.5 sm:space-y-4">
            {BURGER_LAYERS.map((layer, index) => (
              <div
                key={layer.number}
                className="bg-[#141F36]/60 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/50 rounded-[20px] p-4 sm:p-5 transition-all duration-500 hover:translate-x-1.5 flex items-start gap-4 group"
                style={{
                  transitionDelay: `${index * 90}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
                }}
              >
                {/* Number in Orange Circle */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F28C28] text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(242,140,40,0.4)] group-hover:scale-105 transition-transform">
                  {layer.number}
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl uppercase font-bold text-white tracking-wide group-hover:text-[#FFA64D] transition-colors leading-tight">
                    {layer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C0CC] leading-relaxed mt-0.5">
                    {layer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating animation keyframes embedded cleanly */}
      <style>{`
        @keyframes burgerFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
