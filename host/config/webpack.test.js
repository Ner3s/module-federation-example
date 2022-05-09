const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('../package.json').dependencies;
const common = require('../webpack.common');
const exposes = require('./webpack/mfe/exposes');
const remotes = require('./webpack/mfe/remotes');
const utils = require('./webpack/utils');

module.exports = merge(common, {
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
