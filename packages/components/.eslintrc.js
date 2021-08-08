module.exports = {
  ...require("../../.eslintrc.js"),
  rules: {
    "@emotion/jsx-import": "error",
    "@emotion/pkg-renaming": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@emotion/jsx-import": "error",
    "@emotion/pkg-renaming": "error",
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
      "warn",
      { allowExpressions: true },
    ],
    "react/prop-types": "off",
  },
}
