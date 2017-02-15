var webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: './dist',
    filename: 'bonzini-referee.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = config;
