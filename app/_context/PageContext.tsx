"use client";

import useViewportWidth from "@/_hooks/useViewportWidth";
import { useMotionValueEvent, useScroll } from "motion/react";
import { createContext, use, useEffect, useState } from "react";

interface PageStateType {
  isPageAtTop: boolean;
  isViewportSmall: boolean;
}

const PageStateContext = createContext<PageStateType | null>(null);

export function usePageState() {
  const context = use(PageStateContext);

  if (!context) {
    throw new Error("usePageState must be used within an PageStateProvider");
  }

  return context;
}

function PageStateProvider({ children }) {
  const [isPageAtTop, setIsPageAtTop] = useState(true);
  const isViewportSmall = useViewportWidth() < 768;
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => setIsPageAtTop(y === 0));

  if (!isMounted) {
    return null;
  }

  return (
    <PageStateContext.Provider value={{ isPageAtTop, isViewportSmall }}>
      {children}
    </PageStateContext.Provider>
  );
}

export default PageStateProvider;
