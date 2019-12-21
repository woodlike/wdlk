# Gatsby Theme Query

[![CircleCI](https://circleci.com/gh/woodlike/wdlk.svg?style=svg)](https://circleci.com/gh/woodlike/wdlk)

Gatsby theme for adding a [Styled System](https://styled-system.com/) theme object. You can query your theme using [Theme Query](https://github.com/woodlike/wdlk/tree/master/packages/theme-query) directly in your components.

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
