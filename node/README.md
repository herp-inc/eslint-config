# `@herp-inc/eslint-config-node` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config-node)](https://www.npmjs.com/package/@herp-inc/eslint-config-node)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [Node.js](https://nodejs.org/en/) environments

This package is intended to be used along with [`@herp-inc/eslint-config`](https://www.npmjs.com/package/@herp-inc/eslint-config).

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                                  | Version |
| ------------------------------------------------------------------------ | ------- |
| [`eslint`](https://www.npmjs.com/package/eslint)                         | `7`     |
| [`eslint-config-node`](https://www.npmjs.com/package/eslint-config-node) | `11`    |

### Using [npm](https://www.npmjs.com/)

```sh
$ npm install --save-dev @herp-inc/eslint-config-node
```

### Using [yarn](https://yarnpkg.com/)

```sh
$ yarn install --save-dev @herp-inc/eslint-config
```

## Usage

Add `@herp-inc/eslint-config-node` to the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": ["@herp-inc", "@herp-inc/eslint-config-node"]
}
```
