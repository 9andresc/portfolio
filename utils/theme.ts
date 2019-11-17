const breakpoints = [600, 960, 1280];

const colors = {
  light: '#615b69',
  main: '#37323e', // Onyx
  dark: '#110a18',

  white: '#ffffff',
  grey: '#fafafa',

  danger: '#a61c3c', // Deep Carmine
};

const headingSizes = {
  h1: 4.236,
  h2: 2.618,
  h3: 1.618,
};

const mediaQueries = {
  small: `@media (min-width: ${breakpoints[0]}px)`,
  medium: `@media (min-width: ${breakpoints[1]}px)`,
  large: `@media (min-width: ${breakpoints[2]}px)`,
};

const sizes = {
  xxsmall: 0.236,
  xsmall: 0.382,
  small: 0.618,
  medium: 1,
  large: 1.618,
  xlarge: 2.618,
  xxlarge: 4.236,
}

const spacing = {
  ...sizes,
  auto: 'auto',
  none: 0,
};

const textSizes = {
  small: 0.618,
  medium: 1,
  large: 1.618,
};

const weights = ['normal', 'bold'];

export type Theme = {
  breakpoints: Array<number>;

  colors: {
    light: string;
    main: string;
    dark: string;

    white: string;
    grey: string;

    danger: string;
  };

  headingSizes: {
    h1: number;
    h2: number;
    h3: number;
  };

  mediaQueries: {
    small: string;
    medium: string;
    large: string;
  };

  sizes: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };

  spacing: {
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    auto: string;
    none: number;
  };

  textSizes: {
    small: number;
    medium: number;
    large: number;
  };

  unit: string;

  weights: Array<string>;
};

export const theme: Theme = {
  breakpoints,
  colors,
  headingSizes,
  mediaQueries,
  sizes,
  spacing,
  textSizes,
  unit: 'rem',
  weights,
};
