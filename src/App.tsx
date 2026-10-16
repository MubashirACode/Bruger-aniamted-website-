import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureBurgersSection } from './components/SignatureBurgersSection';
import { WhyBurgerHavenSection } from './components/WhyBurgerHavenSection';
import { FreshIngredientsSection } from './components/FreshIngredientsSection';
import { ComboDealsSection } from './components/ComboDealsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderCtaSection } from './components/OrderCtaSection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { OrderModal } from './components/OrderModal';
import { BurgerThumbnail } from './components/ThumbnailStrip';
import { BurgerItem, ComboItem } from './data/content';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      burger: {
        id: 'smoky-bbq',
        name: 'Smoky BBQ',
        badge: 'Bestseller',
        calories: '740 kcal',
        price: '$10.99',
        description: 'Beef patty glazed in rich BBQ sauce with crispy bacon, smoked cheddar and crunchy onion rings.',
        accentColor: '#F28C28',
        svgIcon: () => (
          <svg className="w-8 h-8 mx-auto" viewBox="0 0 48 48" fill="none">
            <path d="M10 20C10 13 15.5 8 24 8C32.5 8 38 13 38 20H10Z" fill="#E08A3C" />
            <rect x="8" y="29" width="32" height="6" rx="3" fill="#542516" />
            <path d="M11 37H37C37 40 34 42 30 42H18C14 42 11 40 11 37Z" fill="#A85B1A" />
          </svg>
        ),
      },
      quantity: 1,
    },
  ]);

  // Modals visibility state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedBurgerForOrder, setSelectedBurgerForOrder] = useState<BurgerThumbnail | null>(null);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  // Cart operations
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Add signature burger directly to cart
  const handleAddSignatureBurgerToCart = (burger: BurgerItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.burger.id === burger.id);
      if (existing) {
        return prev.map((item) =>
          item.burger.id === burger.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${burger.id}-${Date.now()}`,
          burger: {
            id: burger.id,
            name: burger.name,
            badge: burger.tag,
            calories: '680 kcal',
            price: burger.price,
            description: burger.description,
            accentColor: '#F28C28',
            svgIcon: () => (
              <img
                src={burger.image}
                alt={burger.name}
                className="w-8 h-8 rounded object-cover"
              />
            ),
          },
          quantity: 1,
        },
      ];
    });
  };

  // Add combo to cart
  const handleAddComboToCart = (combo: ComboItem) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: `combo-${combo.id}-${Date.now()}`,
        burger: {
          id: combo.id,
          name: combo.name,
          badge: combo.saveBadge,
          calories: '1100 kcal',
          price: combo.price,
          description: combo.description,
          accentColor: '#FFC83D',
          svgIcon: () => (
            <div className="w-8 h-8 rounded bg-[#F28C28]/20 flex items-center justify-center text-[#F28C28] text-xs font-bold">
              ★
            </div>
          ),
        },
        quantity: 1,
      },
    ]);
    setIsCartOpen(true);
  };

  const handleConfirmCustomOrder = (
    burger: BurgerThumbnail,
    extras: { doubleCheese: boolean; addFries: boolean }
  ) => {
    setCartItems((prev) => [
      ...prev,
      {
        id: `cart-custom-${Date.now()}`,
        burger: {
          ...burger,
          name: `${burger.name}${extras.doubleCheese ? ' (Extra Cheese)' : ''}${extras.addFries ? ' + Fries' : ''}`,
          price: `$${(
            parseFloat(burger.price.replace('$', '')) +
            (extras.doubleCheese ? 1.5 : 0) +
            (extras.addFries ? 4.5 : 0)
          ).toFixed(2)}`,
        },
        quantity: 1,
      },
    ]);
    setIsCartOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#B8C0CC] flex flex-col selection:bg-[#F28C28] selection:text-white">
      {/* 
        ========================================================================
        NAVBAR:
        - UNTOUCHED layout, theme, and styling
        - Active navigation links: Home (#home), Menu (#menu), About (#why), Shop (#combos), Contact (#visit)
        ========================================================================
      */}
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* 
        ========================================================================
        HERO SECTION:
        - UNTOUCHED full-screen looping video background, 100% clear with no overlay
        ========================================================================
      */}
      <main className="flex-1 w-full flex flex-col">
        <Hero
          onOrderNow={(burger) => setSelectedBurgerForOrder(burger)}
          onViewMenu={() => handleScrollToSection('menu')}
        />

        {/* 
          ======================================================================
          SECTION 1: SIGNATURE BURGERS (id="menu")
          - 5 cards with 1:1 images, tag, description, price, 1.5s 'Added' state
          ======================================================================
        */}
        <SignatureBurgersSection
          onAddToCart={handleAddSignatureBurgerToCart}
          onViewFullMenu={() => handleScrollToSection('combos')}
        />

        {/* 
          ======================================================================
          SECTION 2: WHY BURGER HAVEN (id="why")
          - 4 feature cards in alternate navy background (#101A2E)
          ======================================================================
        */}
        <WhyBurgerHavenSection />

        {/* 
          ======================================================================
          SECTION 3: FRESH INGREDIENTS
          - Exploded burger floating image and 7 numbered layers
          ======================================================================
        */}
        <FreshIngredientsSection />

        {/* 
          ======================================================================
          SECTION 4: COMBO DEALS (id="combos")
          - 3 combo cards with Most Popular highlight in alternate #101A2E
          ======================================================================
        */}
        <ComboDealsSection onOrderCombo={handleAddComboToCart} />

        {/* 
          ======================================================================
          SECTION 5: HOW IT WORKS
          - 3 connected steps with dashed orange line
          ======================================================================
        */}
        <HowItWorksSection />

        {/* 
          ======================================================================
          SECTION 6: REVIEWS
          - 3 testimonial cards with 5 stars and animated count-up numbers
          ======================================================================
        */}
        <ReviewsSection />

        {/* 
          ======================================================================
          SECTION 7: ORDER CTA BANNER
          - Hot grill glowing card, HAVEN15 promo code copy, dual CTAs
          ======================================================================
        */}
        <OrderCtaSection onOrderNow={() => handleScrollToSection('menu')} />

        {/* 
          ======================================================================
          SECTION 8: VISIT US (id="visit")
          - Contact info cards and dark styled interactive map
          ======================================================================
        */}
        <VisitUsSection />
      </main>

      {/* 
        ========================================================================
        SECTION 9: FOOTER
        - 4 columns, social links, newsletter, back-to-top button
        ========================================================================
      */}
      <Footer />

      {/* Interactive Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={() => {
          setIsOrderSuccess(true);
          setCartItems([]);
          setIsCartOpen(false);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectBurger={(burger) => {
          setSelectedBurgerForOrder(burger);
        }}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      <OrderModal
        burger={selectedBurgerForOrder}
        isOpen={selectedBurgerForOrder !== null}
        onClose={() => setSelectedBurgerForOrder(null)}
        onConfirmOrder={handleConfirmCustomOrder}
      />

      {/* Order Success Toast Notification */}
      {isOrderSuccess && (
        <div
          className="fixed bottom-6 right-6 z-50 bg-[#141F36] border border-[#F28C28] text-white p-5 rounded-2xl shadow-2xl flex items-start gap-4 max-w-sm animate-in slide-in-from-bottom duration-300"
          role="status"
          aria-live="polite"
        >
          <div className="w-8 h-8 rounded-full bg-[#F28C28]/20 flex items-center justify-center text-[#F28C28] shrink-0 mt-0.5">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-white text-sm mb-1">Order Placed Successfully!</h4>
            <p className="text-xs text-[#B8C0CC] leading-relaxed">
              Our grill masters are firing up your prime burger on 450° cast iron now.
            </p>
            <button
              onClick={() => setIsOrderSuccess(false)}
              className="mt-3 text-xs font-semibold text-[#F28C28] hover:text-[#FFA64D] block cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
