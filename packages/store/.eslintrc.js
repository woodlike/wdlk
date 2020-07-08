
module.exports = {
  ...require('../../.eslintrc.js'),
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowExpressions: true }
    ],
  }
};
