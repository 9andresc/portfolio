/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const atImport = require('postcss-import');
const nesting = require('postcss-nesting');
const presetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['> 0.25%', 'not dead'],
    }),
    customProperties({}),
    atImport({}),
    nesting({}),
    presetEnv({ stage: 0 }),
  ],
};
