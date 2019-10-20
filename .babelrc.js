module.exports = {
  plugins: [
    'emotion',
    [
      'module-resolver',
      {
        alias: {
          components: './components',
          lib: './lib',
          pages: './pages',
          utils: './utils',
        },
        root: ['.'],
      },
    ],
  ],
  presets: ['next/babel', '@babel/preset-typescript'],
};
