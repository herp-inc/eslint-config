# Change log

## v0.5.0

### Breaking changes

- Turn on [`@typescript-eslint/no-base-to-string`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md).

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
