// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withSourceMaps({
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
});
