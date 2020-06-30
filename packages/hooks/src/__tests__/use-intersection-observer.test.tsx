import React from 'react';
import { act, render } from '@testing-library/react';
import {
  calcThreshold,
  IntersectionOptions,
  useIntersectionObserver,
} from '..';

const Component: React.FC = () => {
  const [setRef, entry] = useIntersectionObserver<HTMLDivElement>({
    threshold: calcThreshold(10),
  });

  return (
    <div data-testid="test-component" ref={(el: HTMLDivElement) => setRef(el)}>
      {entry && entry.intersectionRatio}
    </div>
  );
};

describe('useIntersectionObserver()', () => {
  let instances: Map<Element, Partial<IntersectionObserver>>;
  let callbacks: Map<Element, (entry: IntersectionObserverEntry[]) => void>;

  describe('useIntersectionObserver hook internals', () => {
    beforeEach(() => {
      instances = new Map();
      callbacks = new Map();
      Object.defineProperty(window, 'IntersectionObserver', {
        writable: true,
        value: jest.fn((cb, options: IntersectionOptions) => {
          const instance = {
            thresholds: Array.isArray(options.threshold)
              ? options.threshold
              : [options.threshold],
            root: options.root,
            rootMargin: options.rootMargin,
            observe: jest.fn((element: Element) => {
              callbacks.set(element, cb);
              instances.set(element, instance);
            }),
            disconnect: jest.fn(),
          };
          return instance;
        }),
      });
    });

    afterEach(() => {
      ((window.IntersectionObserver as unknown) as Partial<
        IntersectionObserver
      > & {
        mockClear: () => void;
      }).mockClear();
      instances = (undefined as unknown) as Map<Element, IntersectionObserver>;
      callbacks = (undefined as unknown) as Map<Element, () => void>;
    });

    it('should have been called with the right DOM reference', () => {
      const { getByTestId } = render(<Component />);
      const el = getByTestId('test-component');
      const instance = instances.get(el) as Partial<IntersectionObserver>;

      expect(instance.observe).toHaveBeenCalledWith(el);
    });

    it('should return the IntersectionEntry on intersecting', () => {
      const { getByTestId } = render(<Component />);
      const el = getByTestId('test-component');
      const instance = instances.get(el) as Partial<IntersectionObserver>;
      const callback = callbacks.get(el) as (
        entry: Partial<IntersectionObserverEntry>[],
      ) => void;
      const entry = [
        {
          boundingClientRect: el.getBoundingClientRect(),
          intersectionRatio: 1,
          intersectionRect: el.getBoundingClientRect(),
          isIntersecting: true,
          rootBounds: instance.root
            ? instance.root.getBoundingClientRect()
            : {},
          target: el,
        } as Partial<IntersectionObserverEntry>,
      ];
      expect(el.innerHTML).toBe('');
      act(() => callback(entry));
      expect(el.innerHTML).toBe('1');
    });
  });

  describe('calcThreshold()', () => {
    it('should return an uniform distribution of steps ', () => {
      expect(calcThreshold(1)).toBe(1.0);
      expect(calcThreshold(2)).toEqual([0, 0.5]);
      expect(calcThreshold(3)).toEqual([0, 0.33, 0.67]);
      expect(calcThreshold(5)).toEqual([0, 0.2, 0.4, 0.6, 0.8]);
      expect(calcThreshold(10)).toMatchSnapshot();
      expect(calcThreshold(100)).toMatchSnapshot();
    });
  });
});
