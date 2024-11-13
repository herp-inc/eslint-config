module.exports = {
  overrides: [
    {
      files: ['*.cts', '*.ctsx', '*.mts', '*.mtsx', '*.ts', '*.tsx'],

      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        // ESlint core
        curly: 'error',
        'default-case-last': 'error',
        eqeqeq: 'error',
        'no-console': 'error',
        'no-else-return': ['error', { allowElseIf: false }],
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-negated-condition': 'error',
        'no-new': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': ['error', { allowInParentheses: false }],
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-backreference': 'error',
        'no-useless-concat': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-object-spread': 'error',
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
          },
        ],

        // @typescript-eslint
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/class-literal-property-style': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'accessor',
            format: ['camelCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'method',
            format: ['camelCase', 'PascalCase'],
            filter: {
              regex: '^__resolveType$',
              match: false,
            },
          },
          {
            selector: 'objectLiteralMethod',
            format: null,
          },
          {
            selector: 'objectLiteralProperty',
            format: null,
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: 'parameterProperty',
            format: ['camelCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            filter: {
              regex: '^_$',
              match: false,
            },
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
        ],
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
        '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
        '@typescript-eslint/no-unused-expressions': ['error', { enforceForJSX: true }],
        '@typescript-eslint/no-unused-vars': 'off', // Let TypeScript check it
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        '@typescript-eslint/return-await': ['error', 'always'],
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

        // import
        'import/first': 'error',
        'import/no-absolute-path': 'error',
        'import/no-default-export': 'error',
        'import/no-deprecated': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-relative-packages': 'error',
        'import/no-unassigned-import': 'error',
        'import/no-useless-path-segments': ['error'],
        'import/order': [
          'error',
          {
            alphabetize: { caseInsensitive: true, order: 'asc' },
            groups: [['builtin', 'external'], 'parent', ['sibling', 'index']],
            'newlines-between': 'always',
          },
        ],

        // Preview 202407
        '@typescript-eslint/consistent-type-exports': [
          'warn',
          {
            fixMixedExportsWithInlineTypeSpecifier: false,
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],
        '@typescript-eslint/no-array-delete': 'warn',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        '@typescript-eslint/no-extraneous-class': 'warn',
        '@typescript-eslint/no-meaningless-void-operator': 'warn',
        '@typescript-eslint/no-mixed-enums': 'warn',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
        'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
        'import/exports-last': 'warn',
        'import/no-cycle': 'warn',

        // Preview 202411
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': 'warn',
        '@typescript-eslint/prefer-return-this-type': 'warn',
      },
    },
    {
      files: ['*.d.ts', '*.d.*.ts'],

      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
