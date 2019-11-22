# Gatsby Theme Query

[![CircleCI](https://circleci.com/gh/woodlike/component-library.svg?style=svg)](https://circleci.com/gh/woodlike/component-library)

Gatsby theme for adding a [Styled System](https://styled-system.com/) theme object. You can query your theme using [Theme Query](https://github.com/woodlike/component-library/tree/master/packages/theme-query) directly in your components.

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
// src/gatsby-theme-query/index.js
export default {
  colors: {
    text: 'magenta',
    background: 'papayawhip',
  },
};
```
