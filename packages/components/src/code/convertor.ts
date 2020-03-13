// import { SxStyleProp } from 'theme-ui';
import { PrismTheme, PrismStyleProp, PrismStyleRule } from '.';
import { isEmptyObj } from '../utils';

export type ThemeMap = Map<string, PrismStyleProp>;

export function convertor(prism: PrismTheme): void {
  try {
    if (!prism.styles || prism.styles.length < 1) {
      throw Error('Your theme should have a styles property (PrismStyles[])');
    }
    const themeMap = new Map<string, PrismStyleProp>();

    prism.styles.forEach((styleRule: PrismStyleRule): void => {
      if (!styleRule.types || styleRule.types.length < 1) {
        throw Error('Your theme should have a types property (string[])');
      }
      if (isEmptyObj(styleRule.style)) {
        throw Error('Your theme should have a style property (PrismStyleProp)');
      }
    });
  } catch (err) {
    console.error(`${err}`);
  }
}
