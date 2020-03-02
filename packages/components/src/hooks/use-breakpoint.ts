import { useEffect, useState } from 'react';

export const useBreakpoint = (min: string, max?: string): boolean => {
  const [isInScreenRange, setIsScreenRange] = useState<boolean>(false);
  const mql = window.matchMedia(max ? `(min-width: ${min}) and (max-width: ${max})` : `(min-width: ${min})`);
  const handleChange = (e: MediaQueryListEvent): void => setIsScreenRange(e.matches);

  useEffect(() => {
    mql.addEventListener('change', handleChange);

    return (): void => {
      mql.removeEventListener('change', handleChange);
    };
  }, [isInScreenRange, mql]);

  return isInScreenRange;
};
