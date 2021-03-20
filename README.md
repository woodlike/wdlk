# @WDLK

<!-- markdownlint-disable MD033 -->
<div align="center">
  <img alt="Woodlike Logo" src="https://cdn.shopify.com/s/files/1/0742/2733/files/wdlk_logo_brand_coral.svg?v=1583499987" width="200">
</div>

[![Actions Status](https://github.com/woodlike/wdlk/workflows/CI/badge.svg)](https://github.com/woodlike/wdlk/actions)

## Motivation

This is Woodlike's multi-package repository containing the latest JavaScript modules we crafted for our own business operations. At Woodlike we craft swimwear out of ocean recovered fishing nets. We are committed to creating healthy oceans and being part of positive change.

Deep in our hearts, we are makers, designers, technologist and believe very much in making our work public for others to use, improve or play around.

### Development Requirements

🚀 Node.js >=10
🌲 Git
🐈 yarn >= 1.12

### Getting started with development

```sh
git clone git@github.com:woodlike/wdlk.git
cd wdlk
# Install packages
yarn
```

### Commands

The list of most important commands to work with the selected workspace.

| Commands                 | Package              | Description                                            |
| ------------------------ | -------------------- | ------------------------------------------------------ |
| `yarn dev`               | **@wdlk/\*\***       | Lerna executes the dev command on all the packages     |
| `yarn build`             | **@wdlk/\*\***       | Lerna executes the build command on all the packages   |
| `yarn lint`              | **@wdlk/\*\***       | Lerna executes the lint command on all the packages    |
| `yarn test`              | **@wdlk/\*\***       | Lerna executes the test command on all the packages    |
| `yarn build:components`  | **@wdlk/components** | compile Typescript into JavaScript                     |
| `yarn build:containers`  | **@wdlk/containers** | compile Typescript into JavaScript                     |
| `yarn build:theme-query` | **theme-query**      | compile Typescript into JavaScript                     |
| `yarn dev:components`    | **@wdlk/components** | compile Typescript into JavaScript in watch mode       |
| `yarn dev:containers`    | **@wdlk/containers** | compile Typescript into JavaScript in watch mode       |
| `yarn lint:components`   | **@wdlk/components** | Lint the package according to the Eslint configuration |
| `yarn lint:containers`   | **@wdlk/containers** | Lint the package according to the Eslint configuration |
| `yarn lint:theme-query`  | **theme-query**      | Lint the package according to the Eslint configuration |
| `yarn test:components`   | **@wdlk/components** | Run unit tests written with Jest                       |
| `yarn test:containers`   | **@wdlk/containers** | Run unit tests written with Jest                       |
| `yarn test:theme-query`  | **theme-query**      | Run unit tests written with Jest                       |
