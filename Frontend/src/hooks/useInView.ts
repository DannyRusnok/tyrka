import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/**
 * useInView - React hook for intersection observer, returns [ref, hasBeenInView]
 * Animace proběhne pouze při prvním zobrazení ve viewportu.
 */
export function useInView<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenInView(true);
        }
      },
      options
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, hasBeenInView];
}
