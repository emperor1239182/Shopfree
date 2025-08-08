// ScrollContext.tsx
import { createContext, useContext, useRef } from 'react';
import { useState } from 'react';
type ScrollRefs = {
  [key: string]: React.RefObject<HTMLUListElement | null>;
};

type ScrollContextType = {
  scrollRefs: ScrollRefs;
  scrollLeft: (id: keyof ScrollRefs) => void;
  scrollRight: (id: keyof ScrollRefs) => void;
} | null;

const ScrollContext = createContext<ScrollContextType>(null);
const WishlistContext = createContext();
const NotificationContext = createContext();

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRefs: ScrollRefs = {
    flashSales: useRef<HTMLUListElement>(null),
    ourProducts: useRef<HTMLUListElement>(null),
    newArrivals: useRef<HTMLUListElement>(null),
    categories: useRef<HTMLUListElement>(null),
  };

  const scrollLeft = (id: keyof typeof scrollRefs) => {
    scrollRefs[id].current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (id: keyof typeof scrollRefs) => {
    scrollRefs[id].current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <ScrollContext.Provider value={{ scrollRefs, scrollLeft, scrollRight }}>
      {children}
    </ScrollContext.Provider>
  );
};
export const useScroll = () => useContext(ScrollContext);



export const Wishlists = ({children})=>{
  type wishProducts = {
    image: string
    name: string
    price: string
  }
  const [wishlist, setWishlist] = useState([]);
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState("");

  const handleWishlist = (wish: wishProduct) => {
    const exists = wishlist.some(
      (item) =>
        item.name === wish.name &&
        item.price === wish.price &&
        item.image === wish.image
    );

    if (exists) {
      // Remove item
      const updatedList = wishlist.filter(
        (item) =>
          item.name !== wish.name ||
          item.price !== wish.price ||
          item.image !== wish.image
           );
      setWishlist(updatedList);
      setCount((prev) => Math.max(prev - 1, 0));
      setNotification("Item Removed From Your Wishlist");
    setTimeout(() => setNotification(""), 3000);
    } else {
      // Add item
      setWishlist((prev) => [...prev, wish]);
      setCount((prev) => prev + 1);
      setNotification("Item Added To Your Wishlist");
        setTimeout(() => setNotification(""), 3000);
    }
  };



  return (
    <WishlistContext.Provider value={{wishlist, count, handleWishlist}}>
      {children}

       {notification && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
    <div className="bg-white/30 dark:bg-black/40 backdrop-blur-md rounded-lg shadow-lg p-4 max-w-sm w-full text-center animate-fade-in">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Notification</h2>
      <p className="text-sm text-gray-700 dark:text-gray-200">{notification}</p>
    </div>
  </div>
)}
    </WishlistContext.Provider>
  )
}
export const useWishlist = () => useContext(WishlistContext);


