# @WDLK

<!-- markdownlint-disable MD033 -->
<div align="center">
  <img alt="Woodlike Logo" src="https://cdn.shopify.com/s/files/1/0742/2733/files/wdlk_logo_brand_coral.svg?v=1583499987" width="200">
</div>

[![CircleCI](https://circleci.com/gh/woodlike/wdlk.svg?style=svg)](https://circleci.com/gh/woodlike/wdlk)

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

| Commands                 | Package              | Description                                                   |
| ------------------------ | -------------------- | ------------------------------------------------------------- |
| `yarn build:components`  | **@wdlk/components** | compile Typescript into JavaScript                            |
| `yarn build:containers`  | **@wdlk/containers** | compile Typescript into JavaScript                            |
| `yarn build:docs`        | **@wdlk/docs**       | Generate static site using Docz and Gatsby                    |
| `yarn build:store`       | **@wdlk/store**      | Generate static site using Gatsby                             |
| `yarn build:theme-query` | **theme-query**      | compile Typescript into JavaScript                            |
| `yarn dev:components`    | **@wdlk/components** | compile Typescript into JavaScript in watch mode              |
| `yarn dev:containers`    | **@wdlk/containers** | compile Typescript into JavaScript in watch mode              |
| `yarn dev:docs`          | **@wdlk/docs**       | Run the development server to start writing documentation     |
| `yarn dev:store`         | **@wdlk/store**      | Run the development server to develop the Shopify store front |
| `yarn lint:components`   | **@wdlk/components** | Lint the package according to the Eslint configuration        |
| `yarn lint:containers`   | **@wdlk/containers** | Lint the package according to the Eslint configuration        |
| `yarn lint:docs`         | **@wdlk/docs**       | Lint the package according to the Eslint configuration        |
| `yarn lint:store`        | **@wdlk/store**      | Lint the package according to the Eslint configuration        |
| `yarn lint:theme-query`  | **theme-query**      | Lint the package according to the Eslint configuration        |
| `yarn test:components`   | **@wdlk/components** | Run unit tests written with Jest                              |
| `yarn test:containers`   | **@wdlk/containers** | Run unit tests written with Jest                              |
| `yarn test:store`        | **@wdlk/store**      | Run unit tests written with Jest                              |
| `yarn test:theme-query`  | **theme-query**      | Run unit tests written with Jest                              |
| `yarn type-check:store`  | **@wdlk/store**      | Run unit tests written with Jest                              |
