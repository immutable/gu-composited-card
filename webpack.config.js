const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/composited-card.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff2$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
