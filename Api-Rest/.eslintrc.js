module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly'
  // },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  rules: {
    'block-no-empty': true,
    "class-methods-use-this": "off",
    // 'color-no-invalid-hex': true,
  }
};
