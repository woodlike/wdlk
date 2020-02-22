/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ThemeQueryConfig, ThemeQuery, ThemeProps } from '.';
import { splitFromDot } from '..';
import { SxStyleProp } from 'theme-ui';

export const query = (theme: ThemeProps, path: string) => {
  const result = [];
  for (const prop in theme) {
    if (prop === path) {
      result.push(theme[prop]);
      break;
    }
    const value = Object.keys(theme[prop]).find((val: string) =>
      path.includes('.') ? val === splitFromDot(path)[0] : val === path,
    );

    if (value && theme[prop][value]) {
      if (path.includes('.')) {
        const [key, val] = splitFromDot(path);
        result.push(theme[prop][key][val]);
        break;
      }
      result.push(theme[prop][value]);
      break;
    }
  }
  return result[0];
};

export function create(config: ThemeQueryConfig): ThemeQuery {
  const validConfig = config && config.theme && typeof config.theme === 'object';
  if (!validConfig) {
    throw Error('A valid configuration with a theme property must be provided');
  }
  const { theme, styles } = config;

  return (objPath: string) => {
    const queryResult = query(theme, objPath);

    if (Array.isArray(queryResult) && queryResult.length > 0 && styles === 'object') {
      return (idx: number | 'all'): SxStyleProp | SxStyleProp[] => {
        return Number.isInteger(idx as number) ? queryResult[idx as number] : queryResult;
      };
    }
    return styles === 'object' ? queryResult : `${queryResult}`;
  };
}
