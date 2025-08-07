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

  const handleWishlist =(wish: wishProducts)=>{
    setWishlist((prev)=> [...prev, wish])
  }

  return (
    <WishlistContext.Provider value={{wishlist, handleWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}
export const useWishlist = () => useContext(WishlistContext);


export const Notification = ({children})=>{
  const [notification, setNotification] = useState("");

  const handleNotification = ()=>{
    setNotification("Item Added To Your Wishlist");
    setTimeout(() => setNotification(""), 3000);

  }

  return (
    <NotificationContext.Provider value={{notification, handleNotification}}>
      {children}

      {notification && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
    <div className="bg-white/30 dark:bg-black/40 backdrop-blur-md rounded-lg shadow-lg p-4 max-w-sm w-full text-center animate-fade-in">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Notification</h2>
      <p className="text-sm text-gray-700 dark:text-gray-200">{notification}</p>
    </div>
  </div>
)}

    </NotificationContext.Provider>
  )
}
export const useNotification = () => useContext(NotificationContext);
