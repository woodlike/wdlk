module.exports = {
  parser: '@typescript-eslint/parser',
  "plugins": [
    "react-hooks"
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  "rules": {
    "react-hooks/rules-of-hooks": "error",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
