import { qt } from '@wdlk/component-library/';
import { renderHook } from '@testing-library/react-hooks';

import { useBreakpoint } from '..';

describe('useNavigationData()', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });
  });
  it('should match the current media query', () => {
    const min = qt('breakpoints')(1);
    const max = qt('breakpoints')(2);
    const mqlMock = window.matchMedia(
      `(min-width: ${min}px) and (max-width: ${max}px)`
    );
    const { result } = renderHook(() => useBreakpoint(min, max));
    expect(result.current).toBeTruthy();
    expect(result.current).toEqual(mqlMock.matches);
  });
});
