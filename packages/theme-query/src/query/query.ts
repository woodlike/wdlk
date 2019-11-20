import { StyledFactoryConfig, StyledQuery, QueryResult } from '.';

export function create(config: StyledFactoryConfig): StyledQuery {
  const validConfig =
    config && config.theme && typeof config.theme === 'object';
  if (!validConfig) {
    throw Error('A valid configuration with a theme property must be provided');
  }
  const { theme, styles } = config;

  return objPath => {
    const intResult: QueryResult[] = [];
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

    return !styles || styles === 'object' ? intResult[0] : `${intResult[0]}`;
  };
}
