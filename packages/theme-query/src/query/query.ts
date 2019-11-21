import { ThemeQueryConfig, ThemeQuery } from '.';
import { splitFromDot } from '..';

export const query = (theme: {}, path: string) => {
  const result = [];
  for (const prop in theme) {
    if (prop === path) {
      result.push(theme[prop]);
      break;
    }
    const value = Object.keys(theme[prop]).find((val: string) =>
      path.includes('.') ? val === splitFromDot(path)[0] : val === path
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
  const validConfig =
    config && config.theme && typeof config.theme === 'object';
  if (!validConfig) {
    throw Error('A valid configuration with a theme property must be provided');
  }
  const { theme, styles } = config;

  return objPath => {
    const queryResult = query(theme, objPath);

    if (
      Array.isArray(queryResult) &&
      queryResult.length > 0 &&
      styles === 'object'
    ) {
      return (idx: number) => queryResult[idx];
    }
    return styles === 'object' ? queryResult : `${queryResult}`;
  };
}
