module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },

  globals: {
    expect: true,
    jest: true
  },

  extends: ['eslint-config-airbnb-base', 'plugin:react/recommended'],

  rules: require('./myRules')
};
