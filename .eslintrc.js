module.exports = {
  extends: ["standard", "prettier"],
  plugins: ["prettier", "jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    camelcase: 0
  }
};
