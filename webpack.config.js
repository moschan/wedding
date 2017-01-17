/* flow */
const AsyncAwaitPlugin = require("webpack-async-await") ;

module.exports = {
  entry: {
    bundle: './src/js/core.js',
  },
  output: {
    path: './docs/js',
    filename: '[name].js'
  },
  plugins: [
    new AsyncAwaitPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
