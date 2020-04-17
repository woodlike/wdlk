
module.exports = {
  ...require('../../.eslintrc.js'),
  rules: {
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true }
      ],
    }
  }
};
