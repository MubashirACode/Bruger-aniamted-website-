import { SectionHeader } from './SectionHeader';
import { ContactCard } from './ContactCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function VisitUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="visit"
      ref={ref}
      className="relative w-full bg-[#101A2E] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white scroll-mt-24 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#F28C28]/6 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          pill="FIND US"
          heading="Come Hungry, Leave Happy"
          subtext="Join us at our kitchen counter or get fresh delivery straight to your doorstep."
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        <div
          className={`transition-all duration-700 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
