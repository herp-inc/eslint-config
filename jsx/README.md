# `@herp-inc/eslint-config-jsx` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config-jsx)](https://www.npmjs.com/package/@herp-inc/eslint-config-jsx)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [JSX](https://facebook.github.io/jsx/) environments

This package is intended to be used along with [`@herp-inc/eslint-config`](https://www.npmjs.com/package/@herp-inc/eslint-config).

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                                          | Version   |
| -------------------------------------------------------------------------------- | --------- |
| [`eslint`](https://www.npmjs.com/package/eslint)                                 | `8`       |
| [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) | `^6.5.0`  |
| [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)       | `^7.27.0` |

### Using [npm](https://www.npmjs.com/)

```sh
$ npm install --save-dev @herp-inc/eslint-config-jsx
```

### Using [yarn](https://yarnpkg.com/)

```sh
$ yarn add --dev @herp-inc/eslint-config-jsx
```

## Usage

Add `@herp-inc/eslint-config-jsx` to the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": ["@herp-inc"],
  "overrides": [
    {
      "extends": ["@herp-inc/eslint-config-jsx"],
      "files": ["*.tsx"]
    }
  ]
}
```
