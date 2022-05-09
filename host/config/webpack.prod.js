const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('../package.json').dependencies;
const common = require('../webpack.common');
const exposes = require('./webpack/mfe/exposes');
const remotes = require('./webpack/mfe/remotes');
const utils = require('./webpack/utils');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: utils.isProduction,
          keep_fnames: utils.isProduction,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: utils.appName,
      filename: 'remoteEntry.js',
      remotes,
      exposes,
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
});
