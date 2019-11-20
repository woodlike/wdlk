export interface StyledFactoryConfig {
  theme: {};
  styles?: StylesType;
}

export type StylesType = 'object' | 'templateLitereal';
export type QueryResult = {} | number[] | string[] | string | number;
export type StyledQuery = (objPath: string) => QueryResult;
