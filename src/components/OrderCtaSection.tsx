import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CONTACT_INFO } from '../data/content';

interface OrderCtaSectionProps {
  onOrderNow: () => void;
}

export function OrderCtaSection({ onOrderNow }: OrderCtaSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('HAVEN15');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0B1220] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Large Rounded Card with Strong Hot-Grill Glow */}
        <div
          className={`relative rounded-[28px] sm:rounded-[36px] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-r from-[#141F36] via-[#1E2E4E] to-[#141F36] border border-[#F28C28]/40 shadow-[0_0_60px_rgba(242,140,40,0.25)] text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Internal Hot Grill Amber Radiant Halos */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-[#F28C28]/25 via-[#FFA64D]/15 to-transparent rounded-full blur-[90px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 right-10 w-[300px] h-[200px] bg-[#FFC83D]/15 rounded-full blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F28C28]/20 border border-[#F28C28]/40 mb-5 shadow-[0_0_15px_rgba(242,140,40,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC83D] animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFA64D]">
                HOT DEAL
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[0.92] uppercase font-bold tracking-wide text-white mb-4 [text-shadow:0_2px_15px_rgba(0,0,0,0.6)]">
              HUNGRY? LET&rsquo;S FIX THAT.
            </h2>

            {/* Subtext with Promo Code */}
            <p className="text-base sm:text-lg text-[#B8C0CC] mb-6 font-medium">
              Get <span className="text-[#FFC83D] font-bold">15% off</span> your first order with code{' '}
              <span className="font-mono font-bold text-white tracking-wider px-2 py-0.5 rounded bg-[#0B1220] border border-[#F28C28]/50">
                HAVEN15
              </span>
            </p>

            {/* Copy code interactive action */}
            <div className="flex items-center justify-center mb-8">
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B1220]/80 hover:bg-[#0B1220] text-xs font-semibold text-[#F28C28] hover:text-[#FFA64D] border border-[#F28C28]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                aria-label="Copy promo code HAVEN15"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none text-[#10B981]" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[#10B981]">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>Copy code</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons: Order Now (filled) & Call Us (outlined) */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOrderNow}
                className="min-h-[50px] px-8 sm:px-10 rounded-full bg-[#F28C28] hover:bg-[#FFA64D] text-white text-base font-semibold tracking-wide shadow-[0_0_28px_rgba(242,140,40,0.5)] hover:shadow-[0_0_40px_rgba(255,166,77,0.7)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Order Now</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="min-h-[50px] px-7 sm:px-8 rounded-full bg-transparent hover:bg-white/[0.06] text-white text-base font-semibold tracking-wide border-2 border-white/25 hover:border-white/50 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
