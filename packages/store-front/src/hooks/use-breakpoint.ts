import { useEffect, useState } from 'react';

export const useBreakpoint = (min: string, max?: string): boolean => {
  const mql = window.matchMedia(max ? `(min-width: ${min}) and (max-width: ${max})` : `(max-width: ${max})`);
  const [isInScreenRange, setIsScreenRange] = useState(mql.matches);
  const handleChange = (e: MediaQueryListEvent): void => setIsScreenRange(e.matches);

  useEffect(() => {
    mql.addEventListener('change', handleChange);

    return (): void => {
      mql.removeEventListener('change', handleChange);
    };
  }, [isInScreenRange]);

  return isInScreenRange;
};
