import { ThemeQueryConfig, StyledQuery, QueryResult } from '.';
import { splitFromDot } from '..';

export function create(config: ThemeQueryConfig): StyledQuery {
  const validConfig =
    config && config.theme && typeof config.theme === 'object';
  if (!validConfig) {
    throw Error('A valid configuration with a theme property must be provided');
  }
  const { theme, styles } = config;

  return (objPath): QueryResult => {
    const intResult: QueryResult[] = [];
    if (objPath.includes('.')) {
      const [prop1, prop2] = splitFromDot(objPath);
      Object.entries(theme).forEach(([key, val]) => {
        const keyQuery = Object.keys(val as QueryResult).find((entry: string) => entry === prop1);
        if (typeof val === 'object' && val !== null && keyQuery) {
          intResult.push(theme[key][keyQuery][prop2]);
        }
      })
    } else {
      Object.entries(theme).forEach(([key, val]) => {
        if (key === objPath) {
          intResult.push(theme[key]);
          return;
        }

        if (typeof val === 'object' && val !== null) {
          const query = Object.keys(val as QueryResult).find((entry: string) => entry === objPath);
          if (query) {
            intResult.push(theme[key][query]);
          }
          return;
        }
      });
    }

    return !styles || styles === 'object' ? intResult[0] : `${intResult[0]}`;
  };
}
