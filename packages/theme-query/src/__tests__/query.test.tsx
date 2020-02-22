/** @jsx jsx */
import { jsx } from 'theme-ui';
import { render } from '@testing-library/react';

import * as ThemeQuery from '../query';
import { ThemeQueryConfig } from '../query';
import { theme } from '../theme';

describe('StyledFactory', () => {
  let sandMock: unknown;
  let coralMock: unknown;
  let coralDarkMock: unknown;
  let headingDefault: unknown;
  let headingSecondary: unknown;

  beforeAll(() => {
    sandMock = 'rgb(204, 153, 102)';
    coralMock = 'rgb(255, 113, 99)';
    coralDarkMock = 'rgb(229, 85, 78)';
    headingDefault = '"Museo", serif';
    headingSecondary = `"Museo500", serif`;
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
      const errMsg = 'A valid configuration with a theme property must be provided';

      expect(() => ThemeQuery.create((null as unknown) as ThemeQueryConfig)).toThrowError(errMsg);
      expect(() => ThemeQuery.create((undefined as unknown) as ThemeQueryConfig)).toThrowError(errMsg);
      expect(() => ThemeQuery.create((1 as unknown) as ThemeQueryConfig)).toThrowError(errMsg);
      expect(() => ThemeQuery.create(('hi' as unknown) as ThemeQueryConfig)).toThrowError(errMsg);
    });

    it('should throw an error if the theme is not provided', () => {
      const errMsg = 'A valid configuration with a theme property must be provided';
      expect(() =>
        ThemeQuery.create({
          theme: (undefined as unknown) as {},
          styles: 'object',
        }),
      ).toThrowError(errMsg);
      expect(() => ThemeQuery.create({ theme: (null as unknown) as {}, styles: 'object' })).toThrowError(errMsg);
      expect(() => ThemeQuery.create({ theme: (1 as unknown) as {}, styles: 'object' })).toThrowError(errMsg);
      expect(() => ThemeQuery.create({ theme: ('' as unknown) as {}, styles: 'object' })).toThrowError(errMsg);
    });

    it('should return a qt function on initialization', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });
      expect(qt).toStrictEqual(expect.any(Function));
    });
  });

  describe('qt(...)', () => {
    it('should return all the defined theme colors', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });
      expect(qt('colors')).toMatchSnapshot();
    });

    it('should return all the corals colors which is a nested color array', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });

      expect(qt('corals')(0)).toBe(coralMock);
      expect(qt('corals')(1)).toBe(coralDarkMock);
    });

    it('should return the sand color which is a flat color', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });

      expect(qt('sand')).toBe(sandMock);
    });

    it('should return the value from fonts.heading.display ', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });

      expect(qt('heading.display')).toBe(headingDefault);
    });

    it('should return the value from fonts.heading.secondary ', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });

      expect(qt('heading.secondary')).toBe(headingSecondary);
    });

    it('should return the complete array from the property value', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });

      expect(qt('corals')('all')).toStrictEqual(theme.colors.corals);
      expect(qt('borderWidths')('all')).toStrictEqual(theme.borderWidths);
    });
  });

  describe('Component Styling', () => {
    it('should receive the necessary styling for the component', () => {
      const qt = ThemeQuery.create({ theme, styles: 'object' });

      const { getByTestId, unmount } = render(
        <div
          data-testid="test-el"
          sx={{
            fontSize: qt('fontSizes')(4),
            fontFamily: qt('heading.secondary'),
            color: qt('sand'),
            bg: qt('corals')(0),
          }}>
          Hi Mom!!!
        </div>,
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
