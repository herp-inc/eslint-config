# `@herp-inc/eslint-config-node` [![npm](https://img.shields.io/npm/v/@herp-inc/eslint-config-node)](https://www.npmjs.com/package/@herp-inc/eslint-config-node)

[ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [Node.js](https://nodejs.org/en/) environments

This package is intended to be used along with [`@herp-inc/eslint-config`](https://www.npmjs.com/package/@herp-inc/eslint-config).

## Installation

Note that the following packages are peer dependencies of this library, which need to be installed separately.

| Package                                                            | Version    |
| ------------------------------------------------------------------ | ---------- |
| [`eslint`](https://www.npmjs.com/package/eslint)                   | `8 \|\| 9` |
| [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n) | `^17.10.0` |

### Using [npm](https://www.npmjs.com/)

```sh
$ npm install --save-dev @herp-inc/eslint-config-node
```

### Using [yarn](https://yarnpkg.com/)

```sh
$ yarn add --dev @herp-inc/eslint-config
```

## Usage

Add `@herp-inc/eslint-config-node` to the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
{
  "extends": ["@herp-inc", "@herp-inc/eslint-config-node"]
}
```

## [Flat config](https://eslint.org/docs/latest/use/configure/configuration-files) support (experimental)

> [!WARNING]
> This feature is still experimental, and thus may encounter breaking changes even in a minor version.

Make sure that the following packages are installed as peer dependencies.

| Package                                                            | Version          |
| ------------------------------------------------------------------ | ---------------- |
| [`eslint`](https://www.npmjs.com/package/eslint)                   | `^8.21.0 \|\| 9` |
| [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n) | `^17.10.0`       |

```eslint.config.js
import config from '@herp-inc/eslint-config/flat';
import configNode from '@herp-inc/eslint-config-node/flat';

export default [
  ...config,
  ...configNode,
  // Add your additional configurations here
];
```
