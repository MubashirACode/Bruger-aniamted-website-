import { useState } from 'react';
import { BURGER_ITEMS, BurgerThumbnail } from './ThumbnailStrip';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBurger: (burger: BurgerThumbnail) => void;
}

export function SearchModal({ isOpen, onClose, onSelectBurger }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = BURGER_ITEMS.filter(
    (b) =>
      b.name.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4 flex items-start justify-center pt-20"
      role="dialog"
      aria-modal="true"
      aria-label="Search burger catalog"
    >
      <div className="bg-[#0B1220] border border-[#141F36] rounded-2xl w-full max-w-xl p-6 shadow-2xl text-white">
        {/* Input Row */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#141F36]">
          <svg className="w-5 h-5 stroke-current stroke-2 text-[#F28C28]" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search classic cheese, smoky bbq, spicy flame..."
            className="w-full bg-transparent border-none text-white placeholder-[#B8C0CC]/50 text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs text-[#B8C0CC] hover:text-white px-2 py-1 bg-[#141F36] rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="pt-4 max-h-80 overflow-y-auto space-y-2">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-[#B8C0CC] py-8">
              No burgers match &ldquo;{query}&rdquo;.
            </p>
          ) : (
            filtered.map((burger) => (
              <button
                key={burger.id}
                onClick={() => {
                  onSelectBurger(burger);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl bg-[#141F36]/40 hover:bg-[#141F36] border border-transparent hover:border-[#F28C28]/40 flex items-center justify-between transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0B1220] flex items-center justify-center shrink-0">
                    {burger.svgIcon(false)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#FFA64D] transition-colors">
                      {burger.name}
                    </h4>
                    <p className="text-xs text-[#B8C0CC] line-clamp-1">
                      {burger.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-mono text-[#F28C28] font-bold">
                  {burger.price}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
