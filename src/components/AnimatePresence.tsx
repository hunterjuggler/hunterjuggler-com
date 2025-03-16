
import React, { createContext, useContext, useEffect, useRef } from "react";

type AnimatePresenceProps = {
  children: React.ReactNode;
  mode?: "sync" | "wait";
};

type AnimateContextProps = {
  mode: "sync" | "wait";
  onExitComplete?: () => void;
};

const AnimatePresenceContext = createContext<AnimateContextProps>({
  mode: "sync",
});

export const useAnimatePresence = () => useContext(AnimatePresenceContext);

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({
  children,
  mode = "sync",
}) => {
  return (
    <AnimatePresenceContext.Provider value={{ mode }}>
      {children}
    </AnimatePresenceContext.Provider>
  );
};

export const useAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    element.classList.add("page-enter");
    element.classList.add("page-enter-active");
    
    const handleAnimationEnd = () => {
      element.classList.remove("page-enter");
      element.classList.remove("page-enter-active");
    };
    
    element.addEventListener("transitionend", handleAnimationEnd);
    
    return () => {
      if (element) {
        element.classList.add("page-exit");
        element.classList.add("page-exit-active");
        element.removeEventListener("transitionend", handleAnimationEnd);
      }
    };
  }, []);

  return ref;
};
