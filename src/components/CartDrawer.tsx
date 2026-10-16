import { BurgerThumbnail } from './ThumbnailStrip';

export interface CartItem {
  id: string;
  burger: BurgerThumbnail;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => {
    const priceNum = parseFloat(item.burger.price.replace('$', '')) || 0;
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <div className="w-full max-w-md bg-[#0B1220] border-l border-[#141F36] h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#141F36]">
            <div>
              <h2 id="cart-title" className="font-display text-2xl font-bold uppercase text-white">
                YOUR HAVEN BAG
              </h2>
              <span className="text-xs text-[#B8C0CC]">
                {items.length} {items.length === 1 ? 'item' : 'items'} in order
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#B8C0CC] hover:text-white hover:bg-[#141F36] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28]"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Items list */}
          <div className="py-6 overflow-y-auto max-h-[calc(100vh-280px)] space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-[#B8C0CC]">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#141F36] flex items-center justify-center text-[#F28C28]">
                  <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <p className="font-medium text-white mb-1">Your bag is empty</p>
                <p className="text-xs text-[#B8C0CC]/70">Add a signature burger from the hero or menu.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#141F36]/60 border border-[#141F36] rounded-xl p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#0B1220] flex items-center justify-center shrink-0">
                      {item.burger.svgIcon(false)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white leading-tight">
                        {item.burger.name}
                      </h4>
                      <span className="text-xs text-[#F28C28] font-mono font-medium">
                        {item.burger.price}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-[#0B1220] rounded-lg px-2 py-1 border border-[#141F36]">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center text-[#B8C0CC] hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-xs font-mono font-bold text-white px-1">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center text-[#B8C0CC] hover:text-white"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer with subtotal and Checkout */}
        <div className="pt-6 border-t border-[#141F36] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#B8C0CC]">Estimated Total</span>
            <span className="text-2xl font-bold font-mono text-white tabular-nums">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full py-3.5 rounded-full bg-[#F28C28] hover:bg-[#FFA64D] text-white font-semibold tracking-wide disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(242,140,40,0.3)] transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
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
