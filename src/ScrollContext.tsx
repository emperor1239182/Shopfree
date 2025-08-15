import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import type { wishProducts } from "./typeSet";
import type { ReactNode } from "react";

// ================= Scroll Context =================
type ScrollRefs = {
  [key: string]: React.RefObject<HTMLUListElement | null>;
};

type ScrollContextType = {
  scrollRefs: ScrollRefs;
  scrollLeft: (id: keyof ScrollRefs) => void;
  scrollRight: (id: keyof ScrollRefs) => void;
};

type ProviderProps = { children: ReactNode };

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: ProviderProps) => {
  const scrollRefs: ScrollRefs = {
    flashSales: useRef<HTMLUListElement>(null),
    ourProducts: useRef<HTMLUListElement>(null),
    newArrivals: useRef<HTMLUListElement>(null),
    categories: useRef<HTMLUListElement>(null),
  };

  const scrollLeft = (id: keyof ScrollRefs) => {
    scrollRefs[id].current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (id: keyof ScrollRefs) => {
    scrollRefs[id].current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ scrollRefs, scrollLeft, scrollRight }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

// ================= Wishlist Context =================
type WishlistContextType = {
  wishlist: wishProducts[];
  count: number;
  handleWishlist: (wish: wishProducts) => void;
  toggleHeart: (id: number) => void;
  clickedItems: number[];
  moveAllToCart: (handleCart: (order: wishProducts) => void) => void;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const Wishlists = ({ children }: ProviderProps) => {
  const [wishlist, setWishlist] = useState<wishProducts[]>(() => {
    const storedWishes = localStorage.getItem("wishlist");
    return storedWishes ? JSON.parse(storedWishes) : [];
  });

  const [count, setCount] = useState<number>(0);
  const [notification, setNotification] = useState<string>("");
  const [clickedItems, setClickedItems] = useState<number[]>([]);

  const toggleHeart = (id: number) => {
    setClickedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setCount(wishlist.length);
  }, [wishlist]);

  const handleWishlist = (wish: wishProducts) => {
    const exists = wishlist.some(
      (item) =>
        item.name === wish.name &&
        item.price === wish.price &&
        item.image === wish.image
    );

    if (exists) {
      const updatedList = wishlist.filter(
        (item) =>
          item.name !== wish.name ||
          item.price !== wish.price ||
          item.image !== wish.image
      );
      setWishlist(updatedList);
      setCount((prev) => Math.max(prev - 1, 0));
      setNotification("Item Removed From Your Wishlist");
    } else {
      setWishlist((prev) => [...prev, wish]);
      setCount((prev) => prev + 1);
      setNotification("Item Added To Your Wishlist");
    }
    setTimeout(() => setNotification(""), 1000);
  };

  const moveAllToCart = (handleCart: (order: wishProducts) => void) => {
    wishlist.forEach((item) => handleCart(item));
    setWishlist([]);
    setCount(0);
    setNotification("All items moved to cart successfully!");
    setTimeout(() => setNotification(""), 1000);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        count,
        handleWishlist,
        toggleHeart,
        clickedItems,
        moveAllToCart,
      }}
    >
      {children}

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/30 dark:bg-black/40 backdrop-blur-md rounded-lg shadow-lg p-4 max-w-sm w-full text-center animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Notification
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              {notification}
            </p>
          </div>
        </div>
      )}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a Wishlists provider");
  }
  return context;
};

// ================= Cart Context =================
type CartItemWithUid = wishProducts & { _uid: string };

type CartContextType = {
  cart: wishProducts[];
  count: number;
  handleCart: (order: wishProducts) => void;
  isInCart: (item: wishProducts) => boolean;
  setCart: React.Dispatch<React.SetStateAction<wishProducts[]>>;
  cartWithIds: CartItemWithUid[];
  handleQuantityChange: (uid: string, value: number) => void;
  totalAmount: number;
  quantities: Record<string, number>;
  setQuantities: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  Order: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const AddToCart = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<wishProducts[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [count, setCount] = useState<number>(0);
  const [notification, setNotification] = useState<string>("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCount(cart.length);
  }, [cart]);

  const handleCart = (order: wishProducts) => {
    const exists = cart.some(
      (item) =>
        item.name === order.name &&
        item.price === order.price &&
        item.image === order.image
    );

    if (exists) {
      const updatedList = cart.filter(
        (item) =>
          item.name !== order.name ||
          item.price !== order.price ||
          item.image !== order.image
      );
      setCart(updatedList);
      setCount((prev) => Math.max(prev - 1, 0));
      setNotification("Item Removed From Your Cart");
    } else {
      setCart((prev) => [...prev, order]);
      setCount((prev) => prev + 1);
      setNotification("Item Added To Cart Successfully!");
    }
    setTimeout(() => setNotification(""), 1000);
  };

  const isInCart = (item: wishProducts) =>
    cart.some(
      (cartItem) =>
        cartItem.name === item.name &&
        cartItem.price === item.price &&
        cartItem.image === item.image
    );

  const cartWithIds: CartItemWithUid[] = useMemo(() => {
    return cart.map((item, index) => ({
      ...item,
      _uid: (item as any).id ?? `${item.name}-${index}`,
    }));
  }, [cart]);

  const handleQuantityChange = (uid: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [uid]: value,
    }));
  };

  const totalAmount = cartWithIds.reduce((sum, item) => {
    const numericPrice = parseFloat(
      item.price?.toString().replace(/[^0-9.-]+/g, "")
    );
    const qty = quantities[item._uid] || 1;
    return sum + (numericPrice * qty || 0);
  }, 0);

  const Order = () => {
    setCart([]);
    setNotification("Successfully Ordered All Items ✅");
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        count,
        handleCart,
        isInCart,
        setCart,
        cartWithIds,
        handleQuantityChange,
        totalAmount,
        quantities,
        setQuantities,
        Order,
      }}
    >
      {children}

      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/30 dark:bg-black/40 backdrop-blur-md rounded-lg shadow-lg p-4 max-w-sm w-full text-center animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Notification
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              {notification}
            </p>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within an AddToCart provider");
  }
  return context;
};

// ================= Search Context =================
type SearchContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: ProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
