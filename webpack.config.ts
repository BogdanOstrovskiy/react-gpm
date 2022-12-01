import { Configuration } from 'webpack';
import webpackConfigProd from './config/webpack.prod.config';
import webpackConfigDev from './config/webpack.dev.config';

const { merge } = require('webpack-merge');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfigCommon: Configuration = {
  entry: {
    main: path.resolve(__dirname, './src/index.tsx'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      img: path.resolve(__dirname, './public/img/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpg?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
};

export default (env: { mode: string }) => (env.mode === 'dev'
  ? merge(webpackConfigCommon, webpackConfigDev)
  : merge(webpackConfigCommon, webpackConfigProd));
