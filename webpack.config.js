const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = {
  context: path.join(__dirname, 'client-src'),
  entry: [
    './main.js'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'style', to:'style'} 
    ])
  ]
};