module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'no-process-exit': 'off', // deprecated in ESLint v7.0.0
    'node/global-require': 'error',
    'node/no-missing-import': 'off', // let TypeScript check it
    'node/no-path-concat': 'error',
    'node/no-process-exit': 'error',
    'node/no-sync': 'error',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/prefer-global/buffer': 'error',
    'node/prefer-global/console': 'error',
    'node/prefer-global/process': 'error',
    'node/prefer-global/text-decoder': 'error',
    'node/prefer-global/text-encoder': 'error',
    'node/prefer-global/url': 'error',
    'node/prefer-global/url-search-params': 'error',
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
  },
};
