import { CONTACT_INFO } from '../data/content';

export function ContactCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      {/* Column 1: Contact Details Cards */}
      <div className="space-y-4 flex flex-col justify-between">
        {/* Address Card */}
        <div className="bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/40 rounded-[20px] p-5 sm:p-6 transition-all duration-300 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] shrink-0">
            <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider block mb-1">
              Location
            </span>
            <p className="text-white font-medium text-base">
              {CONTACT_INFO.address}
            </p>
            <p className="text-xs text-[#B8C0CC] mt-0.5">
              Convenient curbside pickup &amp; delivery radius
            </p>
          </div>
        </div>

        {/* Hours Card */}
        <div className="bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/40 rounded-[20px] p-5 sm:p-6 transition-all duration-300 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] shrink-0">
            <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider block mb-1">
              Opening Hours
            </span>
            <p className="text-white font-medium text-sm sm:text-base">
              {CONTACT_INFO.hours}
            </p>
            <p className="text-xs text-[#FFC83D] mt-0.5">
              Kitchen open until midnight on weekends
            </p>
          </div>
        </div>

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/40 rounded-[20px] p-5 transition-all duration-300 flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B1220] border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] text-[#B8C0CC] uppercase tracking-wider block">Phone Order</span>
              <span className="text-sm font-semibold text-white group-hover:text-[#F28C28] transition-colors">{CONTACT_INFO.phone}</span>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/40 rounded-[20px] p-5 transition-all duration-300 flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B1220] border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] text-[#B8C0CC] uppercase tracking-wider block">Email Inquiries</span>
              <span className="text-sm font-semibold text-white group-hover:text-[#F28C28] transition-colors">{CONTACT_INFO.email}</span>
            </div>
          </a>
        </div>
      </div>

      {/* Column 2: Dark Styled Map Card */}
      <div className="relative bg-[#141F36]/80 backdrop-blur-md border border-white/[0.08] hover:border-[#F28C28]/40 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-h-[340px]">
        {/* Subtle grid background pattern representing a dark stylish map */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F28C28" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            {/* Roads */}
            <path d="M 0 100 Q 150 150 400 80 T 800 200" stroke="#FFC83D" strokeWidth="3" fill="none" opacity="0.6" />
            <path d="M 120 0 Q 180 200 220 400" stroke="#F28C28" strokeWidth="2" fill="none" opacity="0.5" />
          </svg>
        </div>

        {/* Map Center Pin */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center py-8">
          <div className="relative mb-3 animate-bounce">
            <div className="w-12 h-12 rounded-full bg-[#F28C28] text-white flex items-center justify-center shadow-[0_0_25px_rgba(242,140,40,0.7)]">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>
            {/* Radar ring */}
            <div className="absolute inset-0 rounded-full bg-[#F28C28] animate-ping opacity-30" />
          </div>

          <h4 className="font-display text-2xl uppercase font-bold text-white mb-1">
            BURGER HAVEN FLAGSHIP
          </h4>
          <p className="text-xs text-[#B8C0CC] max-w-xs">
            123 Main Street · Corner of Flame &amp; Flavor Blvd
          </p>
        </div>

        {/* Map Bottom Action */}
        <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-[#FFC83D] font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Dine-in seating available
          </span>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F28C28] hover:bg-[#FFA64D] text-white text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(242,140,40,0.3)] transition-all"
          >
            <span>Get Directions</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
