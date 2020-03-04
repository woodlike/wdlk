
module.exports = {
  ...require('../../.eslintrc.js'),
  extends: ['plugin:mdx/recommended'],
  overrides: [
    {
      'files': ['*.md'],
      'rules': {
        'prettier/prettier': [
          2,
          {
            // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
            'parser': 'markdown'
          }
        ]
      }
    },
    {
      'files': ['*.mdx'],
      'extends': ['plugin:mdx/overrides']
    }
  ]
  rules: {
    'react/prop-types': 'off'
  }
};
