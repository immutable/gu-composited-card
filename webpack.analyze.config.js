const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpackProdSettings = require('./webpack.config');

module.exports = {
  ...webpackProdSettings,
  plugins: [new BundleAnalyzerPlugin()],
};
