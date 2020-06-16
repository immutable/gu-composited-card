const path = require('path');
const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin')
  .BabelMultiTargetPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'main': './src/composited-card.component.ts'
  },
  output: {
    filename: 'composited-card.packed.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.css'],
    mainFields: [
      // rxjs and Angular Package Format
      // these are generally shipped as a higher ES language level than `module`
      'es2015',
      'esm2015',
      'fesm2015',

      // current leading de-facto standard - see https://github.com/rollup/rollup/wiki/pkg.module
      'module',

      // previous de-facto standard, superceded by `module`, but still in use by some packages
      'jsnext:main',

      // Angular Package Format - lower ES level
      'esm5',
      'fesm5',

      // standard package.json fields
      'browser',
      'main',
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          BabelMultiTargetPlugin.loader(),
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/typescript', '@babel/preset-env'],
              plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                "@babel/plugin-proposal-class-properties",
              ]
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
    }),
  ]
};
