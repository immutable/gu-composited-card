const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const UPLOAD_DIR = path.resolve(__dirname, 'artist/uploads');
const UPLOAD_PATH = path.join(UPLOAD_DIR, 'custom-art.jpg');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'artist'),
    compress: true,
    port: 9001,
    open: true,
    // The artwork upload endpoint and the fixed illustration path
    // composited-card's illustrationSource override requests — always
    // serves whatever was most recently uploaded, regardless of the
    // size/extension requested, since there's only ever one file.
    before: (app) => {
      app.get(/^\/custom-art\/art2\/.+/, (req, res) => {
        if (!fs.existsSync(UPLOAD_PATH)) {
          res.status(404).end();
          return;
        }
        res.set('Cache-Control', 'no-store');
        res.type('jpg');
        res.sendFile(UPLOAD_PATH);
      });

      app.get('/api/upload-art/status', (req, res) => {
        res.json({ exists: fs.existsSync(UPLOAD_PATH) });
      });

      app.post('/api/upload-art', (req, res) => {
        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', () => {
          fs.mkdirSync(UPLOAD_DIR, { recursive: true });
          fs.writeFileSync(UPLOAD_PATH, Buffer.concat(chunks));
          res.json({ ok: true });
        });
        req.on('error', (err) => res.status(500).json({ ok: false, error: err.message }));
      });

      app.delete('/api/upload-art', (req, res) => {
        if (fs.existsSync(UPLOAD_PATH)) fs.unlinkSync(UPLOAD_PATH);
        res.json({ ok: true });
      });
    },
  },
  entry: './artist/artist.js',
  output: {
    filename: 'artist-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'artist/artist.html'),
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
        test: /\.(woff2|png)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
