# `@herp-inc/eslint-config` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config)](https://www.npmjs.com/package/@herp-inc/eslint-config)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for general [TypeScript](https://www.typescriptlang.org/) environments

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                                                              | Version          |
| ---------------------------------------------------------------------------------------------------- | ---------------- |
| [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | `8`              |
| [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)               | `8`              |
| [`eslint`](https://www.npmjs.com/package/eslint)                                                     | `^8.56.0 \|\| 9` |
| [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)                     | `*`              |
| [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)                         | `^2.30.0`        |

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

## [Flat config](https://eslint.org/docs/latest/use/configure/configuration-files) support (experimental)

> [!WARNING]
> This feature is still experimental, and thus may encounter breaking changes even in a minor version.

Make sure that the following packages are installed as peer dependencies.

| Package                                                                          | Version          |
| -------------------------------------------------------------------------------- | ---------------- |
| [`@eslint/js`](https://www.npmjs.com/package/@eslint/js)                         | `^8.56.0 \|\| 9` |
| [`eslint`](https://www.npmjs.com/package/eslint)                                 | `^8.56.0 \|\| 9` |
| [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) | `9`              |
| [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)     | `^2.30.0`        |
| [`typescript-eslint`](https://www.npmjs.com/package/typescript-eslint)           | `8`              |

```eslint.config.js
import config from '@herp-inc/eslint-config/flat';

export default [
  ...config,
  // Add your additional configurations here
];
```
