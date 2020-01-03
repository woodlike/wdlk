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
    const min = qt('breakpoints')(1) as unknown as string;
    const max = qt('breakpoints')(2) as unknown as string;
    const mqlMock = window.matchMedia(
      `(min-width: ${min}) and (max-width: ${max})`
    );
    const { result } = renderHook(() => useBreakpoint(min, max));
    expect(result.current).toBeTruthy();
    expect(result.current).toEqual(mqlMock.matches);
  });
});
