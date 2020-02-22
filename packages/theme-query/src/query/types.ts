import { SxStyleProp } from 'theme-ui';

export interface ThemeQueryConfig {
  theme: ThemeProps;
  styles: StylesType;
}

export interface ThemeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
export type StylesType = 'object' | 'templateLitereal';
export type QueryResult = ((idx: number | 'all') => SxStyleProp) & SxStyleProp;
export type ThemeQuery = (objPath: string) => QueryResult;
