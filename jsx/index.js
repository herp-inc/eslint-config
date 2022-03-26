module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y', 'react'],
  rules: {
    'react/button-has-type': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-useless-fragment': 'error',
  },
};
