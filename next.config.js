/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

const nextConfiguration = {
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
};

module.exports = withPlugins([[withCSS], [withSourceMaps]], nextConfiguration);
