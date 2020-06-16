const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseSettings = require('./webpack.config');

module.exports = {
  ...webpackBaseSettings,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    compress: true,
    port: 9000,
    open: true,
  },
  entry: './demo/demo.js',
  plugins: [
    ...webpackBaseSettings.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo/demo.html'),
    }),
  ],
};
