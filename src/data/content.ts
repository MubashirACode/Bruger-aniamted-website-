/**
 * Burger Haven Website Content & Configuration Data
 * Edit all prices, descriptions, combos, layers, and contact info here.
 */

export interface BurgerItem {
  id: string;
  name: string;
  tag: string;
  isBestseller?: boolean;
  hasFlame?: boolean;
  description: string;
  price: string;
  numericPrice: number;
  image: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconType: 'beef' | 'flame' | 'bun' | 'delivery';
}

export interface BurgerLayerItem {
  number: number;
  title: string;
  description: string;
}

export interface ComboItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  saveBadge: string;
  isPopular?: boolean;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  iconType: 'burger' | 'grill' | 'enjoy';
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  rating: number;
}

export interface StatItem {
  id: string;
  targetValue: number;
  displayPrefix?: string;
  displaySuffix: string;
  decimals?: number;
  label: string;
}

export const SIGNATURE_BURGERS: BurgerItem[] = [
  {
    id: 'classic-cheese',
    name: 'Classic Cheese',
    tag: 'Classic',
    description: 'Juicy flame grilled beef patty, melted cheddar, crisp lettuce, tomato and onion on a toasted sesame bun.',
    price: '$8.99',
    numericPrice: 8.99,
    image: '/thumbs/classic-cheese.jpg',
  },
  {
    id: 'smoky-bbq',
    name: 'Smoky BBQ',
    tag: 'Bestseller',
    isBestseller: true,
    description: 'Beef patty glazed in rich BBQ sauce with crispy bacon, smoked cheddar and crunchy onion rings.',
    price: '$10.99',
    numericPrice: 10.99,
    image: '/thumbs/smoky-bbq.jpg',
  },
  {
    id: 'double-stack',
    name: 'Double Stack',
    tag: 'Big Appetite',
    description: 'Two thick patties, double melted cheese, pickles, fresh veggies and our house sauce, built for serious hunger.',
    price: '$12.99',
    numericPrice: 12.99,
    image: '/thumbs/double-stack.jpg',
  },
  {
    id: 'spicy-fire',
    name: 'Spicy Fire',
    tag: 'Hot',
    hasFlame: true,
    description: 'Pepper jack cheese, jalapeños, crispy onion strings and fiery sriracha sauce on a charcoal black bun.',
    price: '$10.49',
    numericPrice: 10.49,
    image: '/thumbs/spicy-fire.jpg',
  },
  {
    id: 'crispy-chicken',
    name: 'Crispy Chicken',
    tag: 'Crunchy',
    description: 'Extra crispy golden chicken fillet with creamy mayo, fresh lettuce, tomato and tangy pickles.',
    price: '$9.49',
    numericPrice: 9.49,
    image: '/thumbs/crispy-chicken.jpg',
  },
];

export const WHY_FEATURES: FeatureItem[] = [
  {
    id: 'fresh-beef',
    title: '100% Fresh Beef',
    description: 'Premium beef, ground daily and never frozen.',
    iconType: 'beef',
  },
  {
    id: 'flame-grilled',
    title: 'Flame Grilled',
    description: 'Every patty is grilled over open flame for that smoky taste.',
    iconType: 'flame',
  },
  {
    id: 'baked-fresh',
    title: 'Baked Fresh Daily',
    description: 'Soft brioche and sesame buns baked every morning.',
    iconType: 'bun',
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    description: 'Hot at your door in 30 minutes or less.',
    iconType: 'delivery',
  },
];

export const BURGER_LAYERS: BurgerLayerItem[] = [
  {
    number: 1,
    title: 'Toasted Sesame Bun',
    description: 'Golden and soft, baked fresh each day.',
  },
  {
    number: 2,
    title: 'Crisp Lettuce',
    description: 'Cold, crunchy and washed daily.',
  },
  {
    number: 3,
    title: 'Ripe Tomato',
    description: 'Thick, juicy slices.',
  },
  {
    number: 4,
    title: 'Red Onion Rings',
    description: 'Sharp and fresh, with a sweet bite.',
  },
  {
    number: 5,
    title: 'Melted Cheddar',
    description: 'Rich, creamy and perfectly melted.',
  },
  {
    number: 6,
    title: 'Flame Grilled Patty',
    description: 'Juicy beef with a smoky crust.',
  },
  {
    number: 7,
    title: 'Butter Toasted Base',
    description: 'Warm and crisp at the edges.',
  },
];

export const COMBO_DEALS: ComboItem[] = [
  {
    id: 'solo-combo',
    name: 'Solo Combo',
    price: '$12.99',
    numericPrice: 12.99,
    description: 'Any burger, fries and a drink.',
    saveBadge: 'Save $3',
    isPopular: false,
  },
  {
    id: 'double-date-combo',
    name: 'Double Date Combo',
    price: '$24.99',
    numericPrice: 24.99,
    description: '2 burgers, 2 fries and 2 drinks.',
    saveBadge: 'Save $7',
    isPopular: true,
  },
  {
    id: 'family-feast',
    name: 'Family Feast',
    price: '$44.99',
    numericPrice: 44.99,
    description: '4 burgers, large fries, onion rings and 4 drinks.',
    saveBadge: 'Save $14',
    isPopular: false,
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 1,
    title: 'Pick Your Burger',
    description: 'Choose from our menu or build a combo.',
    iconType: 'burger',
  },
  {
    step: 2,
    title: 'We Grill It Fresh',
    description: 'Your order is cooked right when you place it.',
    iconType: 'grill',
  },
  {
    step: 3,
    title: 'Enjoy It Hot',
    description: 'Pick up or get it delivered to your door.',
    iconType: 'enjoy',
  },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'review-1',
    quote: 'The Smoky BBQ is unreal. Juicy, smoky and the bacon is perfectly crispy.',
    author: 'Hamza R.',
    rating: 5,
  },
  {
    id: 'review-2',
    quote: 'Double Stack is huge and worth every penny. Best burger in town.',
    author: 'Ayesha K.',
    rating: 5,
  },
  {
    id: 'review-3',
    quote: 'Delivery was fast and the burger was still hot. Spicy Fire has the perfect kick.',
    author: 'Daniel M.',
    rating: 5,
  },
];

export const STATS_LIST: StatItem[] = [
  {
    id: 'stat-rating',
    targetValue: 4.9,
    decimals: 1,
    displaySuffix: '',
    label: 'average rating',
  },
  {
    id: 'stat-customers',
    targetValue: 10000,
    displaySuffix: '+',
    label: 'happy customers',
  },
  {
    id: 'stat-burgers',
    targetValue: 50000,
    displaySuffix: '+',
    label: 'burgers served',
  },
];

export const CONTACT_INFO = {
  address: '123 Main Street, Your City',
  hours: 'Mon to Thu 11 AM to 11 PM, Fri to Sun 11 AM to 1 AM',
  phone: '+1 234 567 890',
  email: 'hello@burgerhaven.com',
  mapCoordinates: 'Downtown Gourmet District',
};
