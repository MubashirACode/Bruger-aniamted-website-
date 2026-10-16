import { useState, useEffect } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setIsSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#080D18] border-t border-[#F28C28]/35 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-[#B8C0CC]">
      <div className="max-w-7xl mx-auto">
        {/* 4 Columns Grid on Desktop, Stacked & Centered on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-16 text-center md:text-left">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2.5 text-white mb-4 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F28C28]/15 border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 10a8 8 0 0 1 16 0H4z" />
                  <rect x="3" y="12" width="18" height="2.5" rx="1.25" fill="#FFA64D" />
                  <rect x="4" y="16.5" width="16" height="2" rx="1" />
                </svg>
              </div>
              <span className="font-display text-2xl tracking-wider text-white uppercase font-bold">
                BURGER <span className="text-[#F28C28]">HAVEN</span>
              </span>
            </a>

            <p className="text-sm text-[#B8C0CC] leading-relaxed mb-6 max-w-xs">
              Fresh, bold and flame grilled, every single day.
            </p>

            {/* Social Icons (Instagram, Facebook, TikTok, X) using inline SVG */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141F36] hover:bg-[#F28C28] hover:text-white flex items-center justify-center text-[#B8C0CC] transition-colors"
                aria-label="Follow Burger Haven on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141F36] hover:bg-[#F28C28] hover:text-white flex items-center justify-center text-[#B8C0CC] transition-colors"
                aria-label="Follow Burger Haven on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141F36] hover:bg-[#F28C28] hover:text-white flex items-center justify-center text-[#B8C0CC] transition-colors"
                aria-label="Follow Burger Haven on TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#141F36] hover:bg-[#F28C28] hover:text-white flex items-center justify-center text-[#B8C0CC] transition-colors"
                aria-label="Follow Burger Haven on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-xl uppercase font-bold text-white mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollToTop()}
                  className="hover:text-[#FFA64D] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#FFA64D] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('combos')}
                  className="hover:text-[#FFA64D] transition-colors"
                >
                  Combos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why')}
                  className="hover:text-[#FFA64D] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('visit')}
                  className="hover:text-[#FFA64D] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Signature Burgers List */}
          <div>
            <h4 className="font-display text-xl uppercase font-bold text-white mb-4 tracking-wider">
              OUR BURGERS
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Classic Cheese', 'Smoky BBQ', 'Double Stack', 'Spicy Fire', 'Crispy Chicken'].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection('menu')}
                      className="hover:text-[#FFA64D] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-display text-xl uppercase font-bold text-white mb-2 tracking-wider">
              JOIN THE HAVEN
            </h4>
            <p className="text-sm text-[#B8C0CC] mb-4">
              Get 10% off your next order.
            </p>

            {isSubscribed ? (
              <div className="bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] p-3 rounded-xl text-xs font-semibold">
                ✓ Check your inbox for your 10% promo code!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#141F36] border border-white/[0.1] focus:border-[#F28C28] rounded-full px-4 py-3 text-xs text-white placeholder-[#B8C0CC]/50 focus:outline-none transition-colors"
                  />
                </div>
                {errorMsg && (
                  <p className="text-[11px] text-[#EF4444] text-left px-2">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#F28C28] hover:bg-[#FFA64D] text-white text-xs font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(242,140,40,0.3)]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8C0CC]/60 gap-4 text-center sm:text-left">
          <p>© 2026 Burger Haven. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Round Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#F28C28] hover:bg-[#FFA64D] text-white flex items-center justify-center shadow-[0_0_20px_rgba(242,140,40,0.5)] transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24" aria-hidden="true">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </footer>
  );
}
