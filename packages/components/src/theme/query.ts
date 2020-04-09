import { create, ThemeQuery, ThemeQueryConfig } from 'theme-query';
import { useThemeUI } from 'theme-ui';
import { theme } from './theme';

export const qt = create({ theme, styles: 'object' });

export interface ThemeQueryHook {
  qt: ThemeQuery;
}

export function useThemeQuery(): ThemeQueryHook {
  const { theme: themeUI } = useThemeUI();
  const config: ThemeQueryConfig = {
    theme: themeUI ? themeUI : theme,
    styles: 'object',
  };
  return { qt: create(config) };
}
