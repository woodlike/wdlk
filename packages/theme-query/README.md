# Theme Query

[![CircleCI](https://circleci.com/gh/woodlike/component-library.svg?style=svg)](https://circleci.com/gh/woodlike/component-library)


> Utility function to query Styled System / Theme UI themes.

## Motivation
The [System UI](https://system-ui.com/theme/) specification allows us to write coherent and consistent UIs. It's a solid approach for providing branding compliance across web applications. On the other hand, [Styled System](https://styled-system.com/) offers an ergonomic approach for styling React components using constraint-based style props. Styled Factory offers an alternative to querying design tokens defined in the themes object without the need to depend on a theme provider. 

Usually, UI components are developed in a dedicated component library as part of an overall design system. These libraries are stateless components with the responsibility to provide corporate identity consistency. At the same time, support developers create UIs in no time. At this first level of UI development, it would be nice to have to access theme tokens without depending on the theme provider.


### Benefits

* Portable and dependency-free styling for components.
* Library agnostic styling. Although I would always pick [Emotion](https://emotion.sh/docs/introduction) 👩‍🎤⚡️.
* Access design tokens without using a `<ThemeProvider theme={theme} />` .
* Complete freedom to unit test components without unnecessary component dependency.

## Requirements
🚀 Node.js >= 10
🌲 Git
🐈 yarn >= 1.12

## Getting started 
```bash
  yarn install styled-factory
  yarn install theme-UI
  yarn install @emotion-core
```

## Example
```js
```


## Development
```bash
git clone git@github.com:woodlike/component-library.git
cd component-library
# Install packages
yarn
# Start development mode
yarn dev
# Run and watch Jest unit tests
yarn test --watch
```
