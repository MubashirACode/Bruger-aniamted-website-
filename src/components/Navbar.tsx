import { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export function Navbar({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  activeNav,
  setActiveNav,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for 80px threshold to transition from transparent to solid dark navy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open, and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#why' },
    { name: 'Shop', href: '#combos' },
    { name: 'Contact', href: '#visit' },
  ];

  const handleLinkClick = (name: string, href: string) => {
    setActiveNav(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1220]/92 backdrop-blur-md border-b border-[#141F36] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent border-b border-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('Home', '#home');
          }}
          className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] rounded-md px-1"
          aria-label="Burger Haven Home"
        >
          {/* Custom SVG Burger Icon */}
          <div className="w-8 h-8 rounded-lg bg-[#F28C28]/15 border border-[#F28C28]/30 flex items-center justify-center text-[#F28C28] group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* Burger top bun */}
              <path d="M4 10a8 8 0 0 1 16 0H4z" />
              {/* Sesame seeds */}
              <circle cx="9" cy="7" r="0.8" fill="#FFC83D" />
              <circle cx="12" cy="5.5" r="0.8" fill="#FFC83D" />
              <circle cx="15" cy="7" r="0.8" fill="#FFC83D" />
              {/* Patty */}
              <rect x="3" y="12" width="18" height="2.5" rx="1.25" fill="#FFA64D" />
              {/* Bottom bun */}
              <rect x="4" y="16.5" width="16" height="2" rx="1" />
            </svg>
          </div>
          <span className="font-display text-2xl sm:text-3xl tracking-wider text-white uppercase font-bold group-hover:text-[#FFA64D] transition-colors">
            BURGER <span className="text-[#F28C28]">HAVEN</span>
          </span>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name, link.href);
                }}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] rounded ${
                  isActive
                    ? 'text-[#F28C28]'
                    : 'text-[#B8C0CC] hover:text-[#FFA64D]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                {/* Active indicator underline */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F28C28] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Search, Account, Cart) & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {/* Search Icon */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
            aria-label="Search burgers and menu"
          >
            <svg
              className="w-5 h-5 stroke-current stroke-2 fill-none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* User Icon */}
          <button
            type="button"
            onClick={onOpenAccount}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
            aria-label="My Account"
          >
            <svg
              className="w-5 h-5 stroke-current stroke-2 fill-none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Cart Icon with Orange Count Badge */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <svg
              className="w-5 h-5 stroke-current stroke-2 fill-none"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#F28C28] text-white text-[11px] font-bold rounded-full min-w-4 h-4 px-1 flex items-center justify-center border border-[#0B1220]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down Panel */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#0B1220]/98 backdrop-blur-xl border-b border-[#141F36] px-6 pt-4 pb-8 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                  className={`text-lg font-semibold py-3 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#141F36] text-[#F28C28]'
                      : 'text-[#B8C0CC] hover:bg-[#141F36]/50 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-[#141F36] flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-2 text-sm text-[#B8C0CC] hover:text-white py-2"
            >
              <svg
                className="w-4 h-4 stroke-current stroke-2 fill-none"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search Menu</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center gap-2 text-sm font-medium text-[#F28C28] bg-[#F28C28]/10 hover:bg-[#F28C28]/20 px-3.5 py-2 rounded-lg transition-colors"
            >
              <span>View Cart ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
