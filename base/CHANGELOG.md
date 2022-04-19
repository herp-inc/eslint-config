# Change log

## v0.17.0

### Breaking changes

- Turn on [`@typescript-eslint/no-invalid-void-type`](https://typescript-eslint.io/rules/no-invalid-void-type).
- Turn on [`@typescript-eslint/no-unnecessary-condition`](https://typescript-eslint.io/rules/no-unnecessary-condition).

### Non-breaking changes

- Turn off [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators).

## v0.16.0

### Breaking changes

- Turn on [`@typescript-eslint/no-unused-expressions`](https://typescript-eslint.io/rules/no-unused-expressions/).
- Turn on [`@typescript-eslint/no-unnecessary-boolean-literal-compare`](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)

## v0.15.0

### Breaking changes

- Drop support for ESLint v7.

## v0.14.0

### Non-breaking changes

- Enable `allowSingleExtends` option of [`@typescript-eslint/require-await`](https://typescript-eslint.io/rules/no-empty-interface/).

## v0.13.0

### Non-breaking changes

- Turn off [`@typescript-eslint/require-await`](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-await.md).

## v0.12.0

### Non-breaking changes

- Allow `__resolveType` as a method name

## v0.11.0

### Non-breaking changes

- Allow [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) v5.
- Allow [`eslint`](https://www.npmjs.com/package/eslint) v8.

## v0.10.0

### Non-breaking changes

- Relax [`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) for properties.

## v0.9.0

### Non-breaking changes

- Relax [`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md).

## v0.8.0

### Breaking changes

- Require [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) `^4.7` as a peer dependency
- Turn on [`@typescript-eslint/no-duplicate-imports`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md).
- Turn on [`@typescript-eslint/no-confusing-void-expression`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md).
- Turn on [`@typescript-eslint/no-unnecessary-type-constraint`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md).
- Turn off [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports).

## v0.7.0

### Breaking changes

- Require [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) `^4.2` as a peer dependency
- Require [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) `4` as a peer dependency

## v0.6.0

### Non-breaking changes

- Accept `@typescript-eslint` suite v4.

## v0.5.0

### Breaking changes

- Turn on [`@typescript-eslint/no-base-to-string`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md).

### Non-breaking changes

- Turn on `allowDeclarations` option for [`@typescript-eslint/no-namespace`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md).

## v0.4.1

### Non-breaking changes

- Turn off [`@typescript-eslint/no-unused-vars`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md) explicitly.

## v0.4.0

### Breaking changes

- Turn on [`@typescript-eslint/dot-notation`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md).
- Turn on [`@typescript-eslint/return-await`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md) with the option of `'always'`.
- Turn on [`@typescript-eslint/require-array-sort-compare`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md).
- Turn on [`no-useless-rename`](https://eslint.org/docs/rules/no-useless-rename).

### Non-breaking changes

- Turn off [`@typescript-eslint/no-unused-vars`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md).

## v0.3.0

### Breaking changes

- Move TypeScript-related rules from an override to the root.

## v0.2.1

### Bug fixes

- Fix option for [`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md), which was wrongly specified.

## v0.2.0

### Breaking changes

- Require [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) `^3.0.0` as a peer dependency
  - Some rules have been turned on. See [the change log of the library](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0) for details.
- Require [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) `^3.0.0` as a peer dependency
- Turn on [`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)
- Turn on [`@typescript-eslint/restrict-template-expressions`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
- Turn on [`@typescript-eslint/unbound-method`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md)

## v0.1.0

- Initial release
