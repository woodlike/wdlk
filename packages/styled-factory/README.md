# Styled Factory

[![CircleCI](https://circleci.com/gh/woodlike/component-library.svg?style=svg)](https://circleci.com/gh/woodlike/component-library)


> Utility functions to query Styled System themes without the need to use a theme provider.

## Motivation
The [System UI](https://system-ui.com/theme/) specification allows us to write coherent and consistent UIs. It's definitely an amazing approach for providing branding compliance across web applications. On the other hand, [Styled System](https://styled-system.com/) offers an ergonomic approach for styling React components using constraint-based style props. Styled Factory offers an alternative to query design tokens defined in the themes object without the need to depend on a theme provider. 

UI components are commonly developed in a dedicated component library as part of an overall design system. These libraries are stateless components with the responsibility to provide corporate identity consistency. At the same time, support developers create UIs in no time. At this first level of UI development it would be nice to have to access theme tokens without depending on the theme provider.


### Benefits
* Access design tokens without using a Theme Provider.
* Complete freedom to unit test components without unnecessary component dependency.

## Requirements
🐢 🚀 Node.js >= 10
🌲 Git
🐈 yarn >= 1.12


## Getting started
```sh
git clone git@github.com:woodlike/component-library.git
cd component-library
# Install packages
yarn
# Start development mode
yarn dev
# Run and watch Jest unit tests
yarn test --watch
```
