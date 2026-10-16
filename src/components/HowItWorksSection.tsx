import { SectionHeader } from './SectionHeader';
import { StepCard } from './StepCard';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0B1220] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F28C28]/6 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionHeader
          pill="SIMPLE ORDERING"
          heading="Hungry? It Takes 3 Steps"
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        />

        {/* 
          3 Steps Container connected by a thin dashed orange line:
          - Horizontal dashed line on desktop
          - Vertical dashed line on mobile
        */}
        <div className="relative">
          {/* Desktop horizontal dashed connecting line */}
          <div
            className="hidden md:block absolute top-10 left-[18%] right-[18%] h-[2px] border-t-2 border-dashed border-[#F28C28]/40 z-0"
            aria-hidden="true"
          />

          {/* Mobile vertical dashed connecting line */}
          <div
            className="md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px] border-l-2 border-dashed border-[#F28C28]/40 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className="transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${index * 150}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
