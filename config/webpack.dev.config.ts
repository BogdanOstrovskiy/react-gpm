import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './../build'),
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
};

export default config;
