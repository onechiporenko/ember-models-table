module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    jquery: true
  },
  rules: {
    "quotes": [2, "single"],
    "valid-jsdoc": [2, {
      "prefer": {
        "return": "returns",
      },
      "requireParamDescription": false,
      "requireReturnDescription": false
    }]
  }
};
