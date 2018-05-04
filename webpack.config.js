const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'client-src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};