module.exports = {
  ...require("../../.eslintrc.js"),
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowExpressions: true },
    ],
  },
}
