module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-expect-resolves': 'error',
    'jest/no-if': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-title': ['error', { ignoreTypeOfDescribeName: true }],
  },
};
