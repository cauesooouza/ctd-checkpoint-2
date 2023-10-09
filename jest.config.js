module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src/tests/**/*.js", __dirname],
 };