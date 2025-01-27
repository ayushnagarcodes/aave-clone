"use client";

import { useEffect, useState } from "react";
import useThrottle from "@/_hooks/useThrottle";

let INITIAL_VIEWPORT_WIDTH: number;
if (typeof window !== "undefined") {
  INITIAL_VIEWPORT_WIDTH = window.innerWidth;
}

function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(INITIAL_VIEWPORT_WIDTH);
  const throttledSetViewportWidth = useThrottle(setViewportWidth, 100);

  useEffect(() => {
    const handleResize = () => throttledSetViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [throttledSetViewportWidth]);

  return viewportWidth;
}

export default useViewportWidth;
