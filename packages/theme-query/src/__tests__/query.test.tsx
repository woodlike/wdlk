/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';

import * as ThemeQuery from '../query';
import { ThemeQueryConfig } from '../query';
import { theme } from '../theme';
import { fontSizes } from '../tokens';

describe('StyledFactory', () => {
  // TODO test on component using theme-ui

  let sandMock: unknown;
  let coralMock: unknown;
  let coralDarkMock: unknown;
  let headingDefault: unknown;
  let headingSecondary: unknown

  beforeAll(() => {
    sandMock = 'rgb(204, 153, 102)';
    coralMock = 'rgb(255, 113, 99)';
    coralDarkMock = 'rgb(229, 85, 78)';
    headingDefault = '"museo300", serif';
    headingSecondary = `"museo500", serif`;
  });

  afterAll(() => {
    sandMock = undefined;
    coralMock = undefined;
    coralDarkMock = undefined;
    headingDefault = undefined;
    headingSecondary = undefined;
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

    it('should return the value from fonts.heading.display ', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      expect(query('heading.display')).toBe(headingDefault);
    });

    it('should return the value from fonts.heading.secondary ', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      expect(query('heading.secondary')).toBe(headingSecondary);
    });
  });

  describe('Component Styling', () => {
    it('should receive the necessary styling for the component', () => {
      const query = ThemeQuery.create({ theme, styles: 'object' });
      const { getByTestId, unmount } = render(
        <div
          data-testid="test-el"
          sx={{
            fontSize: query('fontSizes')[4],
            fontFamily: query('heading.secondary'),
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
      expect(styles.getPropertyValue('font-size')).toBe('20px');
      unmount();
    });
  });
});
