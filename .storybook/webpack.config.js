const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config }) => {
  // fonts
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/styles/fonts/SourceSansPro'),
          to: 'fonts/SourceSansPro'
        }
      ]
    })
  );

  config.module.rules.push({
    test: /(\/|\.)(stories|story)\.[tj]sx?$/,
    use: '@storybook/source-loader'
  });

  return config;
};
