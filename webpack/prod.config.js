const { merge } = require('webpack-merge')
const common = require('./common.config.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  target: 'web',
  devtool: false,
  output: {
    filename: '[fullhash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
})
