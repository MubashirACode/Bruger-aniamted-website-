export interface BurgerThumbnail {
  id: string;
  name: string;
  badge: string;
  calories: string;
  price: string;
  description: string;
  accentColor: string;
  svgIcon: (active: boolean) => React.ReactNode;
}

export const BURGER_ITEMS: BurgerThumbnail[] = [
  {
    id: 'classic-cheese',
    name: 'Classic Cheese',
    badge: 'Original',
    calories: '680 kcal',
    price: '$11.99',
    description: 'Smash Angus beef, melted aged cheddar, crisp butter lettuce, dill pickles, and signature house sauce.',
    accentColor: '#FFC83D',
    svgIcon: (active) => (
      <svg className="w-10 h-10 mx-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Golden Bun */}
        <path d="M10 20C10 13.3726 15.3726 8 22 8H26C32.6274 8 38 13.3726 38 20H10Z" fill={active ? '#FFC83D' : '#D49B28'} />
        {/* Seeds */}
        <circle cx="18" cy="14" r="1.2" fill="#FFF2CC" />
        <circle cx="24" cy="11.5" r="1.2" fill="#FFF2CC" />
        <circle cx="30" cy="14" r="1.2" fill="#FFF2CC" />
        {/* Melted Cheese Slice */}
        <path d="M8 22L24 25L40 22L24 27L8 22Z" fill="#FFA64D" />
        <path d="M19 24.5L24 31L29 24.5" fill="#FFC83D" />
        {/* Juicy Patty */}
        <rect x="8" y="27" width="32" height="6" rx="3" fill="#6A3821" />
        {/* Bottom Bun */}
        <path d="M11 35H37C37 38.3137 34.3137 41 31 41H17C13.6863 41 11 38.3137 11 35Z" fill="#C98829" />
      </svg>
    ),
  },
  {
    id: 'smoky-bbq',
    name: 'Smoky BBQ',
    badge: 'Chef Favorite',
    calories: '740 kcal',
    price: '$13.49',
    description: 'Slow-smoked beef brisket blend, caramelized sweet onions, crispy shallots, and bourbon BBQ glaze.',
    accentColor: '#F28C28',
    svgIcon: (active) => (
      <svg className="w-10 h-10 mx-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Brioche Bun */}
        <path d="M10 20C10 13 15.5 8 24 8C32.5 8 38 13 38 20H10Z" fill={active ? '#E08A3C' : '#B86A22'} />
        {/* Seeds */}
        <circle cx="20" cy="13" r="1" fill="#FFE5B4" />
        <circle cx="28" cy="13" r="1" fill="#FFE5B4" />
        {/* Smoky BBQ Drizzle */}
        <path d="M9 22C14 20 18 24 24 21C30 18 34 23 39 22" stroke="#871F14" strokeWidth="3" strokeLinecap="round" />
        {/* Crispy Onion ring layer */}
        <circle cx="24" cy="26" r="6" stroke="#FFA64D" strokeWidth="2.5" />
        {/* Patty */}
        <rect x="8" y="29" width="32" height="6" rx="3" fill="#542516" />
        {/* Bottom Bun */}
        <path d="M11 37H37C37 40 34 42 30 42H18C14 42 11 40 11 37Z" fill="#A85B1A" />
      </svg>
    ),
  },
  {
    id: 'double-stack',
    name: 'Double Stack',
    badge: 'Monster',
    calories: '920 kcal',
    price: '$15.99',
    description: 'Twin prime beef patties, double thick Wisconsin cheddar, caramelized bacon jam, and smoky aioli.',
    accentColor: '#FF9E2C',
    svgIcon: (active) => (
      <svg className="w-10 h-10 mx-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Top Bun */}
        <path d="M10 16C10 11 15 6 24 6C33 6 38 11 38 16H10Z" fill={active ? '#FFC83D' : '#CF9323'} />
        {/* Patty 1 */}
        <rect x="9" y="18" width="30" height="5" rx="2.5" fill="#5A2F1B" />
        {/* Cheese 1 */}
        <path d="M8 23L24 26L40 23L31 29L24 26L17 29L8 23Z" fill="#FFA64D" />
        {/* Patty 2 */}
        <rect x="9" y="27" width="30" height="5" rx="2.5" fill="#5A2F1B" />
        {/* Cheese 2 */}
        <rect x="11" y="32" width="26" height="2" fill="#FFC83D" />
        {/* Bottom Bun */}
        <path d="M11 36H37C37 39.5 34 42 30 42H18C14 42 11 39.5 11 36Z" fill="#C98829" />
      </svg>
    ),
  },
  {
    id: 'spicy-fire',
    name: 'Spicy Fire',
    badge: 'Hot & Zesty',
    calories: '710 kcal',
    price: '$12.99',
    description: 'Habanero pepper jack cheese, pickled jalapeños, fiery ghost pepper relish, and chipotle lime cream.',
    accentColor: '#EF4444',
    svgIcon: (active) => (
      <svg className="w-10 h-10 mx-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Bun with chili flecks */}
        <path d="M10 20C10 13 15.5 8 24 8C32.5 8 38 13 38 20H10Z" fill={active ? '#E06D3C' : '#B84F22'} />
        <circle cx="18" cy="13" r="1.2" fill="#EF4444" />
        <circle cx="28" cy="14" r="1.2" fill="#EF4444" />
        {/* Jalapeño slice */}
        <circle cx="17" cy="22" r="3.5" fill="#15803D" />
        <circle cx="31" cy="22" r="3.5" fill="#15803D" />
        {/* Red Pepper sauce */}
        <path d="M8 24C16 26 32 23 40 25" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
        {/* Patty */}
        <rect x="8" y="28" width="32" height="6" rx="3" fill="#6A3821" />
        {/* Bottom Bun */}
        <path d="M11 36H37C37 39.5 34 42 30 42H18C14 42 11 39.5 11 36Z" fill="#9C4C1B" />
      </svg>
    ),
  },
  {
    id: 'crispy-chicken',
    name: 'Crispy Chicken',
    badge: 'Crunch King',
    calories: '650 kcal',
    price: '$12.49',
    description: 'Golden buttermilk fried chicken breast, sweet honey slaw, tangy pickles, and roasted garlic mayo.',
    accentColor: '#F59E0B',
    svgIcon: (active) => (
      <svg className="w-10 h-10 mx-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* Brioche Top */}
        <path d="M10 19C10 12.5 15.5 8 24 8C32.5 8 38 12.5 38 19H10Z" fill={active ? '#FFC83D' : '#CF9323'} />
        {/* Cabbage slaw layer */}
        <path d="M10 21C16 19 22 23 28 20C34 18 38 21 38 21" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
        {/* Golden Crispy Fried Fillet (rugged edges) */}
        <path d="M8 25C9 23 13 23 17 24C21 23 27 22 31 24C35 23 39 25 39 28C39 31 34 32 30 32C24 33 16 32 11 31C8 30 7 27 8 25Z" fill="#D97706" />
        {/* Bottom Bun */}
        <path d="M11 35H37C37 38.5 34 41 30 41H18C14 41 11 38.5 11 35Z" fill="#B47822" />
      </svg>
    ),
  },
];

interface ThumbnailStripProps {
  activeId: string;
  onSelect: (item: BurgerThumbnail) => void;
}

export function ThumbnailStrip({ activeId, onSelect }: ThumbnailStripProps) {
  return (
    <div className="w-full">
      {/* Strip title / hint */}
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#B8C0CC]/75">
          Featured Creations
        </span>
        <span className="h-[1px] w-8 bg-[#141F36]" />
      </div>

      {/* Horizontal thumbnail cards list */}
      <div
        className="flex items-end gap-3 sm:gap-3.5 overflow-x-auto scrollbar-none pb-2 pt-3 max-w-full"
        role="tablist"
        aria-label="Burger selections"
      >
        {BURGER_ITEMS.map((burger) => {
          const isActive = activeId === burger.id;

          return (
            <div key={burger.id} className="relative flex flex-col items-center shrink-0">
              {/* Small orange arrow directly above the active card */}
              {isActive && (
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce"
                  aria-hidden="true"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-[#F28C28] drop-shadow-[0_2px_4px_rgba(242,140,40,0.5)]"
                    viewBox="0 0 12 12"
                  >
                    <polygon points="6,9 1,3 11,3" />
                  </svg>
                </div>
              )}

              {/* Thumbnail Card Button */}
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${burger.id}`}
                id={`tab-${burger.id}`}
                onClick={() => onSelect(burger)}
                className={`relative w-[84px] sm:w-[94px] h-[94px] sm:h-[102px] rounded-xl flex flex-col items-center justify-between p-2 text-center transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] hover:-translate-y-1 ${
                  isActive
                    ? 'border-2 border-[#F28C28] bg-[#141F36] shadow-[0_0_18px_rgba(242,140,40,0.3)] ring-1 ring-[#F28C28]/40'
                    : 'border border-[#141F36] bg-[#0E172A]/80 hover:bg-[#141F36]/90 hover:border-[#1E2E4E]'
                }`}
              >
                {/* Burger graphic/placeholder */}
                <div className="w-full flex-1 flex items-center justify-center pointer-events-none">
                  {burger.svgIcon(isActive)}
                </div>

                {/* Tiny name label */}
                <div className="w-full mt-1">
                  <span
                    className={`block text-[11px] font-medium leading-tight truncate transition-colors ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-[#B8C0CC] group-hover:text-white'
                    }`}
                    title={burger.name}
                  >
                    {burger.name}
                  </span>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
