module.exports = {
  env: {
    "browser": true,
    "node": true
  },
  extends: ["airbnb"],
  plugins: ['react', "jsx-a11y", "import"],
  rules: require('./myRules')
};
