const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'ghpages'),
    compress: true,
    port: 9000,
    open: true,
  },
  entry: './ghpages/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'ghpages'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'ghpages/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
