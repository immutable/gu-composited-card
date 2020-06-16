const path = require('path');
const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin')
  .BabelMultiTargetPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/composited-card.component.ts',
  output: {
    publicPath: '/',
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.css'],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          BabelMultiTargetPlugin.loader(),
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/typescript'],
              plugins: [
                [
                  '@babel/plugin-proposal-decorators',
                  { decoratorsBeforeExport: true, legacy: false },
                ],
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: [BabelMultiTargetPlugin.loader()],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff2|woff|png|webp)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new BabelMultiTargetPlugin({
      normalizeModuleIds: true,
      doNotTarget: [/querystring-es3/],
    }),
  ],
};
