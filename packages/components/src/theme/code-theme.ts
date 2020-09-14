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
        color: 'rgb(199, 77, 238)',
      },
    },
    {
      types: ['punctuation', 'arrow'],
      style: {
        color: 'rgb(238, 238, 238)',
      },
    },
    {
      types: ['attr-name', 'parameter'],
      style: {
        color: 'rgb(255, 230, 109)',
      },
    },
    {
      types: ['script-punctuation', 'function'],
      style: {
        color: 'rgb(238, 93, 67)',
      },
    },
    {
      types: ['script'],
      style: {
        color: 'rgb(7, 212, 182)',
      },
    },
    {
      types: ['variable', 'constant', 'tag', 'char'],
      style: {
        color: 'rgb(249, 38, 114)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(243, 156, 18)',
      },
    },
    {
      types: ['builtin', 'at-rule', 'class-name'],
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
