module.exports = {
  verbose: process.env.NODE_ENV === "test",
  testMatch: ["**/?(*.)+(spec|test).js"],
  collectCoverageFrom: ["!src/**/index.js"]
};
