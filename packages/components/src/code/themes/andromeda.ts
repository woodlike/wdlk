import { PrismTheme } from '..';

/**
 * @name Andromeda
 * @author EliverLara
 * @description: Theme created by EliverLara https://github.com/EliverLara/Andromeda
 * Ported using themeFromVsCode https://github.com/FormidableLabs/prism-react-renderer/tree/master/tools/themeFromVsCode
 */

export const andromeda: PrismTheme = {
  plain: {
    color: 'rgb(213,206,217)',
    backgroundColor: 'rgb(38,42,51)',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(95, 97, 103)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: 'rgb(213, 206, 217)',
      },
    },
    {
      types: ['punctuation', 'arrow', 'script-punctuation'],
      style: {
        color: 'rgb(255, 113, 99)',
      },
    },
    {
      types: ['variable', 'constant', 'tag', 'char', 'class-name'],
      style: {
        color: 'rgb(255, 113, 99)',
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
