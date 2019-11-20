const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: 'ts-loader',
    exclude: /node_modules/,
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
