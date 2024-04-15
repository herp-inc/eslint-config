module.exports = {
  extends: ['plugin:n/recommended'],
  plugins: ['n'],
  rules: {
    'no-process-exit': 'off', // deprecated in ESLint v7.0.0
    'n/global-require': 'error',
    'n/no-missing-import': 'off', // let TypeScript check it
    'n/no-path-concat': 'error',
    'n/no-process-exit': 'error',
    'n/no-sync': 'error',
    'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
  },
};
