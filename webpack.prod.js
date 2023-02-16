const { merge } = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    // eslint-disable-next-line quotes
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
})
