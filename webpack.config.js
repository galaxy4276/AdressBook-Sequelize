const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin');

const MODE = 'development';
const ENTRY_FILE = path.resolve(__dirname, 'src', 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'src', 'public');

module.exports = {
  entry: ENTRY_FILE,
  mode: MODE,
  output: {
    path: OUTPUT_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: ExtractCSS.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractCSS({
      filename: 'styles.css',
    }),
  ],
};

