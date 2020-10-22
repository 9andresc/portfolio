module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
      },
    ],
    [
      'module-resolver',
      {
        alias: {
          components: './components',
          lib: './lib',
          pages: './pages',
          utils: './utils',
          views: './views',
        },
        root: ['.'],
      },
    ],
  ],
  presets: ['next/babel', '@babel/preset-typescript'],
};
