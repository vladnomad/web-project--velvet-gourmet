const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssImport(/* pluginOptions */),
    postcssPresetEnv({stage: 2})
  ]
}