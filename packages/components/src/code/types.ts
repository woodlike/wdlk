export interface PrismStyleProp {
  readonly color: string;
  readonly backgroundColor?: string;
  readonly fontStyle?: 'normal' | 'italic';
  readonly fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  readonly textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  readonly opacity?: number;
  readonly [styleKey: string]: string | number | void;
}

export interface PrismTheme {
  plain: PrismStyleProp;
  styles: PrismStyleRule[];
}

export interface PrismStyleRule {
  readonly types: string[];
  readonly style: PrismStyleProp;
}
