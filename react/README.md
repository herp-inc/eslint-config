# `@herp-inc/eslint-config-react` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config-react)](https://www.npmjs.com/package/@herp-inc/eslint-config-react)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [React](https://reactjs.org/) environments

This package is intended to be used along with [`@herp-inc/eslint-config`](https://www.npmjs.com/package/@herp-inc/eslint-config) and [`@herp-inc/eslint-config-jsx`](https://www.npmjs.com/package/@herp-inc/eslint-config-jsx).

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                                                | Version   |
| -------------------------------------------------------------------------------------- | --------- |
| [`eslint`](https://www.npmjs.com/package/eslint)                                       | `8`       |
| [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)             | `^7.27.0` |
| [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) | `^4.3.0`  |

### Using [npm](https://www.npmjs.com/)

```sh
$ npm install --save-dev @herp-inc/eslint-config-react
```

### Using [yarn](https://yarnpkg.com/)

```sh
$ yarn add --dev @herp-inc/eslint-config
```

## Usage

Add `@herp-inc/eslint-config-react` to the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "env": {
    "react": true
  },
  "extends": ["@herp-inc", "@herp-inc/eslint-config-react"]
}
```
