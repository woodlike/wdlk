import * as React from 'react';
import { render } from '@testing-library/react';
import * as Intersection from '..';
import { TargetRenderData } from '..';

describe('<Intersection.Target />', () => {
  let initEntry: TargetRenderData;

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
  });

  beforeEach(() => {
    initEntry = {
      targetRef: { current: null },
      entry: {
        time: 0,
        boundingClientRect: { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 },
        isIntersecting: false,
        intersectionRatio: 0,
      },
    };
  });

  afterEach(() => {
    initEntry = (undefined as unknown) as TargetRenderData;
  });

  it('should have rendered with the initial TargetRenderData', () => {
    const renderFn = jest.fn().mockReturnValue(null);
    const { unmount } = render(<Intersection.Target>{renderFn}</Intersection.Target>);
    const data: TargetRenderData = renderFn.mock.calls[0][0];
    expect(renderFn).toHaveBeenCalled();
    expect(data).toStrictEqual(initEntry);
    unmount();
  });
});
