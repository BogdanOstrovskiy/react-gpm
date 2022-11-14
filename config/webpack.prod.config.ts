import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration } from 'webpack';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config: Configuration = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './../build'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
