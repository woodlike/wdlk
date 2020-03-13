import { PrismTheme, PrismStyleProp, PrismStyleRule } from '.';
import { isEmptyObj } from '../utils';

export type CodeTheme = Map<string, PrismStyleProp>;

export function convertor(prism: PrismTheme): CodeTheme {
  const theme = new Map<string, PrismStyleProp>();
  try {
    if (!prism.styles || prism.styles.length < 1) {
      throw Error('Your theme should have a styles property (PrismStyles[])');
    }

    prism.styles.forEach((styleRule: PrismStyleRule): void => {
      const { types, style } = styleRule;

      if (!types || types.length === 0) {
        throw Error('Your theme should have a types property (string[])');
      }
      if (isEmptyObj(style)) {
        throw Error('Your theme should have a style property (PrismStyleProp)');
      }

      types.forEach(type => {
        theme.has(type) ? theme.set(type, { ...style, ...theme.get(type) }) : theme.set(type, { ...style });
      });
    });
  } catch (err) {
    console.error(`${err}`);
  }
  return theme;
}
