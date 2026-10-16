import { SectionHeader } from './SectionHeader';
import { BurgerCard } from './BurgerCard';
import { SIGNATURE_BURGERS, BurgerItem } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SignatureBurgersSectionProps {
  onAddToCart: (burger: BurgerItem) => void;
  onViewFullMenu: () => void;
}

export function SignatureBurgersSection({
  onAddToCart,
  onViewFullMenu,
}: SignatureBurgersSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="menu"
      ref={ref}
      className="relative w-full bg-[#0B1220] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white scroll-mt-24 overflow-hidden"
    >
      {/* Soft orange radial background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F28C28]/6 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Centered Pill and Heading */}
        <SectionHeader
          pill="OUR MENU"
          heading="Our Signature Burgers"
          subtext="Five fan favourites, grilled fresh to order and stacked high with flavour."
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        {/* 
          Responsive grid of 5 cards:
          - 3 columns on desktop with the last 2 centered (using 6-column grid where row 1 has 3 items of span-2, row 2 starts at col 2)
          - 2 columns on tablet
          - 1 column on mobile
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {SIGNATURE_BURGERS.map((burger, index) => {
            // Determine column layout for 3 top + 2 centered bottom on desktop
            let colClass = 'lg:col-span-2';
            if (index === 3) {
              colClass = 'lg:col-span-2 lg:col-start-2';
            } else if (index === 4) {
              colClass = 'lg:col-span-2';
            }

            return (
              <div
                key={burger.id}
                className={`${colClass} transition-all duration-700 ease-out`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <BurgerCard burger={burger} onAddToCart={onAddToCart} />
              </div>
            );
          })}
        </div>

        {/* Bottom Centered Link: "View Full Menu →" */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onViewFullMenu}
            className="group inline-flex items-center gap-2 text-white hover:text-[#FFA64D] text-base font-semibold tracking-wide py-2 px-4 transition-colors relative"
          >
            <span>View Full Menu</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
            <span
              className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#F28C28] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
