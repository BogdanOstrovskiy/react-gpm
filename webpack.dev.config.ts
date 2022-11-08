const path = require('path');
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    watch: true,
    devtool: 'source-map',
    // devServer: {
    //     static: path.join(__dirname, "build"),
    //     compress: true,
    //     port: 5000,
    //     open: true,
    // },
    devServer: {
        port: 5000,
        hot: true,
        compress: true,
        proxy: {
            "/": {
                target: "http://[::1]:3001",
                ws: false,
            },
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]'
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    }
}

export default config;
