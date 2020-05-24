import * as React from 'react';
import { render } from '@testing-library/react';
import * as Intersection from '..';
import { TargetRenderData } from '..';

describe('<Intersection.Target />', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
  });

  it('should have rendered with the initial TargetRenderData', () => {
    const renderFn = jest.fn().mockReturnValue(null);
    const { unmount } = render(
      <Intersection.Target>{renderFn}</Intersection.Target>,
    );
    const data: TargetRenderData = renderFn.mock.calls[0][0];
    expect(renderFn).toHaveBeenCalled();
    expect(data).toMatchSnapshot();
    unmount();
  });
});
