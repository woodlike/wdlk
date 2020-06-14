import { renderHook } from '@testing-library/react-hooks';
import { useMedia } from '..';

describe('useMedia on Node.JS', () => {
  let queries: string[];
  let values: number[];
  let defaultValue: number;

  beforeEach(() => {
    global.console = ({ error: jest.fn() } as unknown) as Console;
    queries = [
      '(min-width: 1500px)',
      '(min-width: 960px)',
      '(min-width: 600px)',
    ];
    values = [5, 4, 3];
    defaultValue = 666;
  });

  afterEach(() => {
    queries = (undefined as unknown) as string[];
    values = (undefined as unknown) as number[];
    defaultValue = (undefined as unknown) as number;
  });

  it('should have call console error on missing "window"', () => {
    renderHook(() => useMedia<number>(queries, values, defaultValue));
    expect(console.error).toHaveBeenCalled();
  });

  it('should return the default value on missing "window"', () => {
    const { result } = renderHook(() =>
      useMedia<number>(queries, values, defaultValue),
    );

    expect(result.current).toBe(defaultValue);
  });
});
