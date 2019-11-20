# Styled Factory

[![CircleCI](https://circleci.com/gh/woodlike/component-library.svg?style=svg)](https://circleci.com/gh/woodlike/component-library)


> Utility functions to query Styled System themes without the need to use a theme provider.

## Motivation
The [System UI](https://system-ui.com/theme/) specification allows us to write coherent and consistent UIs. It's defenitely an amazing approach for providing branding compliance across web applications. On the other hand, [Styled System](https://styled-system.com/) offers an ergonomic approach for styling React components using constraint-based style props. Styled Factory offers an alternative to query design tokens defined in the themes object without the need to depend on a theme provider.

### Benefits
* Access design tokens without using a Theme Provider.
* Complete freedom to unit test components without any component dependency.
* Get rid of those annoying `warn.logs` from your test suite.

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
