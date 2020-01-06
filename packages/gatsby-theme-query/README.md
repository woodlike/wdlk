# Gatsby Theme Query

> A Gatsby theme for theme sensitive Styled System queries.
[![CircleCI](https://circleci.com/gh/woodlike/wdlk.svg?style=svg)](https://circleci.com/gh/woodlike/wdlk)

The `gatsby-theme-query`  allows you to query your [Styled System](https://styled-system.com/) theme. It provides an instantiated `qt` **(query theme)** function for you to easily access style tokens.

 [Theme Query](https://github.com/woodlike/wdlk/tree/master/packages/theme-query) is aware of your theme. You can shadow the theme like in any other Gatsby theme and the `qt` function is fully aware of the changes.

## Getting started

```bash
  yarn add theme-query theme-ui gatsby-theme-query @emotion/core
```

```js
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-theme-query'],
};
```

## Shadow the theme with your own

```js
// src/gatsby-theme-query/theme.js
import { theme } from 'gatsby-theme-query';

export default {
  ...theme,
  borderWidths: [1, 2, 3, 4],
  letterSpacings: [0.5, 1, 1.5],
  colors: {
    text: 'magenta',
    background: 'papayawhip',
  },
};
```
