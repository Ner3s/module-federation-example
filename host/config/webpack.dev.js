const { IgnorePlugin } = require('webpack');
const { merge } = require('webpack-merge');

const common = require('../webpack.common');

const externalModulesShouldBeIgnored = {
  mfe1: ['routes'],
  mfe2: ['routes'],
};

// Get all external modules, creates a regex to ignore those modules.
let ignorePluginMap = [];
Object.entries(externalModulesShouldBeIgnored).forEach(([key, value]) => {
  value.map(item =>
    ignorePluginMap.push(
      new IgnorePlugin({ resourceRegExp: new RegExp(`${key}/${item}`) }),
    ),
  );
});

module.exports = merge(common, {
  plugins: [...ignorePluginMap],
});
