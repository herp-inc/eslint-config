# `@herp-inc/eslint-config` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config)](https://www.npmjs.com/package/@herp-inc/eslint-config)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for general [TypeScript](https://www.typescriptlang.org/) environments

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                                                              | Version    |
| ---------------------------------------------------------------------------------------------------- | ---------- |
| [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | `5 \|\| 6` |
| [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)               | `5 \|\| 6` |
| [`eslint`](https://www.npmjs.com/package/eslint)                                                     | `8`        |
| [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)                     | `*`        |
| [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)                         | `^2.25.0`  |

### Using [npm](https://www.npmjs.com/)

```sh
$ npm install --save-dev @herp-inc/eslint-config
```

### Using [yarn](https://yarnpkg.com/)

```sh
$ yarn add --dev @herp-inc/eslint-config
```

## Usage

Add `@herp-inc` to the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": ["@herp-inc"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module"
  }
}
```
