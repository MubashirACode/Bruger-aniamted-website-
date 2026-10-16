import { useState } from 'react';
import { BurgerThumbnail } from './ThumbnailStrip';

interface OrderModalProps {
  burger: BurgerThumbnail | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirmOrder: (burger: BurgerThumbnail, extras: { doubleCheese: boolean; addFries: boolean }) => void;
}

export function OrderModal({
  burger,
  isOpen,
  onClose,
  onConfirmOrder,
}: OrderModalProps) {
  const [doubleCheese, setDoubleCheese] = useState(false);
  const [addFries, setAddFries] = useState(true);

  if (!isOpen || !burger) return null;

  const basePrice = parseFloat(burger.price.replace('$', '')) || 0;
  const currentTotal = basePrice + (doubleCheese ? 1.5 : 0) + (addFries ? 4.5 : 0);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm p-4 flex items-center justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div className="bg-[#0B1220] border border-[#141F36] rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl text-white animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#141F36]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#141F36] flex items-center justify-center shrink-0">
              {burger.svgIcon(true)}
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#F28C28] tracking-wider block">
                {burger.badge}
              </span>
              <h3 id="order-modal-title" className="font-display text-2xl font-bold uppercase text-white">
                {burger.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36]"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Description & Calories */}
        <p className="text-sm text-[#B8C0CC] leading-relaxed my-4">
          {burger.description}
        </p>

        {/* Customization Options */}
        <div className="space-y-3 py-2 border-y border-[#141F36]/80 my-4">
          <label className="flex items-center justify-between p-3 rounded-xl bg-[#141F36]/40 hover:bg-[#141F36] border border-transparent hover:border-[#1E2E4E] cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={doubleCheese}
                onChange={(e) => setDoubleCheese(e.target.checked)}
                className="w-4 h-4 rounded accent-[#F28C28]"
              />
              <span className="text-sm font-medium text-white">Extra Melted Aged Cheddar</span>
            </div>
            <span className="text-xs font-mono text-[#FFC83D]">+$1.50</span>
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#141F36]/40 hover:bg-[#141F36] border border-transparent hover:border-[#1E2E4E] cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={addFries}
                onChange={(e) => setAddFries(e.target.checked)}
                className="w-4 h-4 rounded accent-[#F28C28]"
              />
              <span className="text-sm font-medium text-white">Add Hand-Cut Truffle Fries</span>
            </div>
            <span className="text-xs font-mono text-[#FFC83D]">+$4.50</span>
          </label>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-xs text-[#B8C0CC] block">Item Total</span>
            <span className="text-2xl font-bold font-mono text-white tabular-nums">
              ${currentTotal.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              onConfirmOrder(burger, { doubleCheese, addFries });
              onClose();
            }}
            className="px-6 py-3 rounded-full bg-[#F28C28] hover:bg-[#FFA64D] text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(242,140,40,0.35)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Add to Order</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
