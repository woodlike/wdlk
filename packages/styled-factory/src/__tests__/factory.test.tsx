/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';

import * as StyledFactory from '../factory';
import { StyledFactoryConfig } from '../factory';
import { theme } from '../theme';

describe('StyledFactory', () => {
  // TODO
  // 1 return either a style literal or object
  //4 test on component using theme-ui

  let sandMock: unknown;
  let coralMock: unknown;
  let coralDarkMock: unknown;

  beforeAll(() => {
    sandMock = 'rgb(204, 153, 102)';
    coralMock = 'rgb(255, 113, 99)';
    coralDarkMock = 'rgb(229, 85, 78)';
  });

  afterAll(() => {
    sandMock = undefined;
    coralMock = undefined;
    coralDarkMock = undefined;
  });

  describe('StyledFactory.create(config)', () => {
    it('should throw an error if no configuration is provided', () => {
      const errMsg =
        'A valid configuration with a theme property must be provided';

      expect(() =>
        StyledFactory.create((null as unknown) as StyledFactoryConfig)
      ).toThrowError(errMsg);
      expect(() =>
        StyledFactory.create((undefined as unknown) as StyledFactoryConfig)
      ).toThrowError(errMsg);
      expect(() =>
        StyledFactory.create((1 as unknown) as StyledFactoryConfig)
      ).toThrowError(errMsg);
      expect(() =>
        StyledFactory.create(('hi' as unknown) as StyledFactoryConfig)
      ).toThrowError(errMsg);
    });

    it('should throw an error if the theme is not provided', () => {
      const errMsg =
        'A valid configuration with a theme property must be provided';
      expect(() =>
        StyledFactory.create({
          theme: (undefined as unknown) as {},
        })
      ).toThrowError(errMsg);
      expect(() =>
        StyledFactory.create({
          theme: (null as unknown) as {},
        })
      ).toThrowError(errMsg);
      expect(() =>
        StyledFactory.create({
          theme: 1,
        })
      ).toThrowError(errMsg);
      expect(() =>
        StyledFactory.create({
          theme: '',
        })
      ).toThrowError(errMsg);
    });

    it('should return a query function on initialization', () => {
      const query = StyledFactory.create({
        theme,
        styles: 'object',
      });
      expect(query).toStrictEqual(expect.any(Function));
    });
  });

  describe('query(...)', () => {
    it('should return all the defined theme colors', () => {
      const query = StyledFactory.create({
        theme,
        styles: 'object',
      });
      expect(query('colors')).toMatchSnapshot();
    });

    it('should return all the corals colors which is a nested color array', () => {
      const query = StyledFactory.create({
        theme,
        styles: 'object',
      });
      expect(query('corals')[0]).toBe(coralMock);
      expect(query('corals')[1]).toBe(coralDarkMock);
    });

    it('should return the sand color which is a flat color', () => {
      const query = StyledFactory.create({
        theme,
        styles: 'object',
      });
      expect(query('sand')).toBe(sandMock);
    });
  });

  describe('Component Styling', () => {
    it('should receive the necessary styling for the component', () => {
      const query = StyledFactory.create({theme});
      const { getByTestId, unmount } = render(
        <div
          data-testid="test-el"
          sx={{
            fontWeight: 'bold',
            fontSize: 4,
            color: query('sand'),
            bg: query('corals')[0],
          }}>
          Hi Mom!!!
        </div>
      );
      const div = getByTestId('test-el');
      const styles = getComputedStyle(div);
      expect(styles.getPropertyValue('color')).toBe(sandMock);
      expect(styles.getPropertyValue('background-color')).toBe(coralMock);
      unmount();
    });
  });
});
