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
  styles: PrismStyleRule[];
}

export interface PrismStyleRule {
  readonly types: string[];
  readonly style: PrismStyleProp;
}

export const prismTheme: PrismTheme = {
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(95, 97, 103)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(213, 206, 217)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(249, 38, 114)',
      },
    },
    {
      types: ['variable', 'tag', 'char'],
      style: {
        color: 'rgb(0, 232, 198)',
      },
    },
    {
      types: ['number', 'attr-name'],
      style: {
        color: 'rgb(243, 156, 18)',
      },
    },
    {
      types: ['builtin', 'at-rule', 'function'],
      style: {
        color: 'rgb(255, 230, 109)',
      },
    },
    {
      types: ['string', 'changed'],
      style: {
        color: 'rgb(124, 183, 255)',
      },
    },
    {
      types: ['operator', 'deleted'],
      style: {
        color: 'rgb(238, 93, 67)',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'rgb(150, 224, 114)',
      },
    },
  ],
};
