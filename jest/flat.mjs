import jest from 'eslint-plugin-jest';

import config from './index.js';

export default [
  {
    files: ['**/*.test.*'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      ...config.rules,
    },
  },
];
