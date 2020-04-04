
module.exports = {
  ...require('../../.eslintrc.js'),
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true }
    ],
    'react/prop-types': 'off',
  }
};
