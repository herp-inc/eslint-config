import jsxA11y from 'eslint-plugin-jsx-a11y';

import config from './index.js';

export default [
  jsxA11y.flatConfigs.recommended,
  {
    rules: config.rules,
  },
].map((config) => ({
  ...config,
  files: ['**/*.{ctsx,jsx,mtsx,tsx}'],
}));
