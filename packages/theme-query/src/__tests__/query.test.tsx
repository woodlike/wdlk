/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';

import * as ThemeQuery from '../query';
import { ThemeQueryConfig } from '../query';
import { theme } from '../theme';

describe('StyledFactory', () => {
  // TODO
  // 1 return either a style literal or object
  //4 test on component using theme-ui

  let sandMock: unknown;
  let coralMock: unknown;
  let coralDarkMock: unknown;
  let headingDefault: unknown;

  beforeAll(() => {
    sandMock = 'rgb(204, 153, 102)';
    coralMock = 'rgb(255, 113, 99)';
    coralDarkMock = 'rgb(229, 85, 78)';
    headingDefault = '"museo300", serif';
  });

  afterAll(() => {
    sandMock = undefined;
    coralMock = undefined;
    coralDarkMock = undefined;
    headingDefault = undefined;
  });

  describe('StyledFactory.create(config)', () => {
    it('should throw an error if no configuration is provided', () => {
      const errMsg =
        'A valid configuration with a theme property must be provided';

      expect(() =>
        ThemeQuery.create((null as unknown) as ThemeQueryConfig)
      ).toThrowError(errMsg);
      expect(() =>
        ThemeQuery.create((undefined as unknown) as ThemeQueryConfig)
      ).toThrowError(errMsg);
      expect(() =>
        ThemeQuery.create((1 as unknown) as ThemeQueryConfig)
      ).toThrowError(errMsg);
      expect(() =>
        ThemeQuery.create(('hi' as unknown) as ThemeQueryConfig)
      ).toThrowError(errMsg);
    });

    it('should throw an error if the theme is not provided', () => {
      const errMsg =
        'A valid configuration with a theme property must be provided';
      expect(() =>
        ThemeQuery.create({ theme: (undefined as unknown) as {}, styles: 'object'
        })
      ).toThrowError(errMsg);
      expect(() =>
        ThemeQuery.create({ theme: (null as unknown) as {}, styles: 'object' })
      ).toThrowError(errMsg);
      expect(() =>
        ThemeQuery.create({ theme: 1, styles: 'object' })
      ).toThrowError(errMsg);
      expect(() =>
        ThemeQuery.create({ theme: '', styles: 'object' })
      ).toThrowError(errMsg);
    });

    it('should return a query function on initialization', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      expect(query).toStrictEqual(expect.any(Function));
    });
  });

  describe('query(...)', () => {
    it('should return all the defined theme colors', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      expect(query('colors')).toMatchSnapshot();
    });

    it('should return all the corals colors which is a nested color array', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      expect(query('corals')[0]).toBe(coralMock);
      expect(query('corals')[1]).toBe(coralDarkMock);
    });

    it('should return the sand color which is a flat color', () => {
      const query = ThemeQuery.create({ theme, styles: 'object'});
      expect(query('sand')).toBe(sandMock);
    });

    it('should return the value from fonts.heading.body ', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      expect(query('heading.default')).toBe(headingDefault);
    });
  });

  describe('Component Styling', () => {
    it('should receive the necessary styling for the component', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });

      // tslint:disable-next-line: no-console
      console.log('11111', theme);
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
