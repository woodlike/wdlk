import * as React from 'react';
import { render } from '@testing-library/react';
import * as Intersection from '..';
import { calcThreshold, IntersectionCtxData } from '..';

describe('<Intersection />', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
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

  describe('Initiate Intersections root context object', () => {
    it('should contain the configued Intersection Observable options', () => {
      const ctxFn = jest.fn().mockReturnValue(null);
      const options = {
        rootMargin: '10px 10px 10px 10px',
        threshold: 1.0,
      };
      const { unmount } = render(
        <Intersection.Root options={options}>
          <Intersection.Consumer>{ctxFn}</Intersection.Consumer>
        </Intersection.Root>,
      );
      expect(ctxFn).toHaveBeenCalledTimes(1);
      const ctx: IntersectionCtxData = ctxFn.mock.calls[0][0];
      expect(ctx).toEqual({
        options: {
          rootMargin: '10px 10px 10px 10px',
          threshold: 1.0,
        },
      });
      unmount();
    });
    it('should contain basic configured options on missing props', () => {
      const ctxFn = jest.fn().mockReturnValue(null);
      const { unmount } = render(
        <Intersection.Root>
          <Intersection.Consumer>{ctxFn}</Intersection.Consumer>
        </Intersection.Root>,
      );
      expect(ctxFn).toHaveBeenCalledTimes(1);
      const ctx: IntersectionCtxData = ctxFn.mock.calls[0][0];
      expect(ctx).toEqual(
        expect.objectContaining({
          options: {
            threshold: 1,
          },
        }),
      );
      unmount();
    });
    it('should contain a configured threshold', () => {
      const ctxFn = jest.fn().mockReturnValue(null);
      const { unmount } = render(
        <Intersection.Root steps={3}>
          <Intersection.Consumer>{ctxFn}</Intersection.Consumer>
        </Intersection.Root>,
      );
      expect(ctxFn).toHaveBeenCalledTimes(1);
      const ctx: IntersectionCtxData = ctxFn.mock.calls[0][0];
      expect(ctx).toEqual(
        expect.objectContaining({
          options: {
            threshold: [0, 0.33, 0.67],
          },
        }),
      );
      unmount();
    });
    it('should contain a combination of configured options and steps', () => {
      const ctxFn = jest.fn().mockReturnValue(null);
      const options = {
        rootMargin: '5% 10%',
      };
      const { unmount } = render(
        <Intersection.Root options={options} steps={5}>
          <Intersection.Consumer>{ctxFn}</Intersection.Consumer>
        </Intersection.Root>,
      );
      expect(ctxFn).toHaveBeenCalledTimes(1);
      const ctx: IntersectionCtxData = ctxFn.mock.calls[0][0];
      expect(ctx).toEqual({
        options: {
          rootMargin: '5% 10%',
          threshold: [0, 0.2, 0.4, 0.6, 0.8],
        },
      });
      unmount();
    });
  });
});
