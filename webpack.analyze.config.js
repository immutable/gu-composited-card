const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const webpackBaseSettings = require('./webpack.config');

module.exports = {
  ...webpackBaseSettings,
  plugins: [
    ...webpackBaseSettings.plugins,
    new BundleAnalyzerPlugin()
  ],
};
