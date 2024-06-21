const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.join(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: path.join('images', '[name].[ext]'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('icons', '[name].[ext]'),
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', './src/index.html'),
      filename: 'index.html',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    allowedHosts: 'all',
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
}
