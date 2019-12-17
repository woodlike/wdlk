import { SxStyleProp } from 'theme-ui';

export interface ThemeQueryConfig {
  theme: {};
  styles: StylesType;
}

export type StylesType = 'object' | 'templateLitereal';
export type QueryResult = ((idx: number | 'all') => SxStyleProp) & SxStyleProp;
export type ThemeQuery = (objPath: string) => QueryResult;
