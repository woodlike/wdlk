import { useEffect, useState } from 'react';

export const useBreakpoint = (min: number, max?: number): boolean => {
  const mql = window.matchMedia(max
    ? `(min-width: ${min}px) and (max-width: ${max}px)`
    : `(max-width: ${max}px)`
  );
  const [isInScreenRange, setIsScreenRange] = useState(mql.matches);
  const handleChange = (e: MediaQueryListEvent): void => setIsScreenRange(e.matches);

  useEffect(() => {
    mql.addEventListener('change', handleChange);

    return () => {
      mql.removeEventListener('change', handleChange);
    };
  }, [isInScreenRange]);

  return isInScreenRange;
};
