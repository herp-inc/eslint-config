# `@herp-inc/eslint-config-jest` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config-jest)](https://www.npmjs.com/package/@herp-inc/eslint-config-jest)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [Jest](https://jestjs.io/) environments

This package is intended to be used along with [`@herp-inc/eslint-config`](https://www.npmjs.com/package/@herp-inc/eslint-config).

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                                  | Version      |
| ------------------------------------------------------------------------ | ------------ |
| [`eslint`](https://www.npmjs.com/package/eslint)                         | `8 \|\| 9`   |
| [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest) | `27 \|\| 28` |

### Using [npm](https://www.npmjs.com/)

```sh
$ npm install --save-dev @herp-inc/eslint-config-jest
```

### Using [yarn](https://yarnpkg.com/)

```sh
$ yarn add --dev @herp-inc/eslint-config-jest
```

## Usage

Add `@herp-inc/eslint-config-jest` to the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": ["@herp-inc"],
  "overrides": [
    {
      "extends": ["@herp-inc/eslint-config-jest"],
      "files": ["*.test.ts"]
    }
  ]
}
```
