export const breakpoints = [600, 960, 1280];

export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints[0]}px)`,
  md: `@media (min-width: ${breakpoints[1]}px)`,
  lg: `@media (min-width: ${breakpoints[2]}px)`,
};

export type Theme = {
  colors: {
    light: string;
    main: string;
    dark: string;

    white: string;
    grey: string;

    danger: string;
  };
};

export const theme: Theme = {
  colors: {
    light: '#615b69',
    main: '#37323e', // Onyx
    dark: '#110a18',

    white: '#ffffff',
    grey: '#fafafa',

    danger: '#a61c3c', // Deep Carmine
  },
};
