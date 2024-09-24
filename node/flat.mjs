import nodePlugin from 'eslint-plugin-n';

import config from './index.js';

export default [
  nodePlugin.configs['flat/recommended'],
  {
    rules: config.rules,
  },
];
