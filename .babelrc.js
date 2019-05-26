module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          lib: './src/lib',
          utils: './src/utils',
        },
        root: ['./src'],
      },
    ],
  ],
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: '> 0.25%, not dead',
          node: 'current',
        },
        useBuiltIns: 'entry',
      },
    ],
  ],
};
