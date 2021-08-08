module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react-hooks", "@emotion"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    "react/prop-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": [
      "off",
      { allowExpressions: true },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowExpressions: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
