// ─── Types ────────────────────────────────────────────────
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  category: string;
  reviews: number;
  description: string;
  fullDescription: string[];
  href: string;
};

export type ShopCategory = {
  id: string;
  label: string;
  count: number;
  href: string;
};

// ─── Categories ───────────────────────────────────────────
export const SHOP_CATEGORIES: ShopCategory[] = [
  { id: "agriculture",  label: "Agriculture",      count: 2, href: "/shop?category=agriculture"  },
  { id: "farming",      label: "Farming",          count: 3, href: "/shop?category=farming"      },
  { id: "vegetables",   label: "Fresh Vegetables", count: 3, href: "/shop?category=vegetables"   },
  { id: "harvest",      label: "Harvest",          count: 1, href: "/shop?category=harvest"      },
  { id: "organic",      label: "Organic Food",     count: 1, href: "/shop?category=organic"      },
];

export const SORT_OPTIONS = [
  { value: "default",    label: "Default sorting"   },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc",   label: "Name: A to Z"       },
];

const SHARED_DESCRIPTION = [
  "Lorem ipsum dolor sit amet sectetur adipiscin elit cras feulat antesed ces condimentum viverra duis autne nim convallis id diam vitae duis egety dictum erosin dictum sem. Vivamus sed molestie sapien aliquam et facilisis arcu dut molestie augue suspendisse sodales tortor nunced quis cto ligula posuere cursus keuis aute iure dolor.",
  "Aliquam et facilisis arcuut olestie augue. Suspendisse sodales tortor nunc quis auctor ligula posuere cursus duis aute irure dolor in reprehenderit in voluptate velit esse cill doloreeu fugiat nulla pariatur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt molit anim id est laborum.",
];

// ─── Products ─────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: "apples",
    name: "Apples",
    price: 50.00,
    image: "/images/shop/shop-1.png",
    imageAlt: "Fresh red apples",
    category: "Fruits",
    reviews: 4,
    description: "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque.", fullDescription: SHARED_DESCRIPTION,
    href: "/shop/apples",
  },
  {
    id: "bananas",
    name: "Bananas",
    price: 20.00,
    image: "/images/shop/shop-2.png",
    imageAlt: "Fresh yellow bananas",
    category: "Fruits",
    reviews: 3,
    description: "Sweet and fresh bananas from organic farms.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/bananas",
  },
  {
    id: "carrot",
    name: "Carrot",
    price: 50.00,
    image: "/images/shop/shop-3.png",
    imageAlt: "Fresh orange carrots",
    category: "Vegetables",
    reviews: 5,
    description: "Crisp and nutritious organic carrots.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/carrot",
  },
  {
    id: "garlic",
    name: "Garlic",
    price: 20.00,
    image: "/images/shop/shop-4.png",
    imageAlt: "Fresh organic garlic bulbs",
    category: "Vegetables",
    reviews: 4,
    description: "Premium organic garlic with rich flavor.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/garlic",
  },
  {
    id: "grapes",
    name: "Grapes",
    price: 100.00,
    image: "/images/shop/shop-5.png",
    imageAlt: "Fresh green grapes",
    category: "Fruits",
    reviews: 5,
    description: "Sweet and juicy organic green grapes.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/grapes",
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: 30.00,
    image: "/images/shop/shop-6.png",
    imageAlt: "Fresh green lettuce",
    category: "Vegetables",
    reviews: 3,
    description: "Crisp fresh lettuce harvested daily.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/lettuce",
  },
  {
    id: "onions",
    name: "Onions",
    price: 20.00,
    image: "/images/shop/shop-7.png",
    imageAlt: "Fresh red onions",
    category: "Vegetables",
    reviews: 4,
    description: "Fresh organic red onions from local farms.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/onions",
  },
  {
    id: "potatos",
    name: "Potatos",
    price: 30.00,
    image: "/images/shop/shop-8.png",
    imageAlt: "Fresh organic potatoes",
    category: "Vegetables",
    reviews: 5,
    description: "Premium organic potatoes from certified farms.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/potatos",
  },
  {
    id: "red-grapes",
    name: "Red Grapes",
    price: 100.00,
    image: "/images/shop/shop-9.png",
    imageAlt: "Fresh dark red grapes",
    category: "Fruits",
    reviews: 5,
    description: "Rich and sweet organic red grapes.",
    fullDescription: SHARED_DESCRIPTION,
    href: "/shop/red-grapes",
  },
];

// ─── Helpers ──────────────────────────────────────────────
export const PRODUCT_IDS = PRODUCTS.map((p) => p.id);
export const PRICE_MIN = 10;
export const PRICE_MAX = 100;

export function getRelatedProducts(currentId: string, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, count);
}