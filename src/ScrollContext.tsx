// ScrollContext.tsx
import { createContext, useContext, useRef } from 'react';

type ScrollRefs = {
  [key: string]: React.RefObject<HTMLUListElement | null>;
};

type ScrollContextType = {
  scrollRefs: ScrollRefs;
  scrollLeft: (id: keyof ScrollRefs) => void;
  scrollRight: (id: keyof ScrollRefs) => void;
} | null;

const ScrollContext = createContext<ScrollContextType>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRefs: ScrollRefs = {
    flashSales: useRef<HTMLUListElement>(null),
    trending: useRef<HTMLUListElement>(null),
    newArrivals: useRef<HTMLUListElement>(null),
    // Add more if needed
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
