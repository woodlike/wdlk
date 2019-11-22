export interface ThemeQueryConfig {
  theme: {};
  styles: StylesType;
}

export type StylesType = 'object' | 'templateLitereal';
export type QueryResult = ((idx: number) => string) & (string | number);
export type ThemeQuery = (objPath: string) => QueryResult;
