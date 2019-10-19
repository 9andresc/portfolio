export const breakpoints = [600, 960, 1280];

export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints[0]}px)`,
  md: `@media (min-width: ${breakpoints[1]}px)`,
  lg: `@media (min-width: ${breakpoints[2]}px)`,
};

export type Theme = {
  colors: {
    lightColor: string;
    mainColor: string;
    darkColor: string;

    whiteColor: string;
    greyColor: string;

    dangerColor: string;
  };
};

export const theme: Theme = {
  colors: {
    lightColor: '#615b69',
    mainColor: '#37323e', // Onyx
    darkColor: '#110a18',

    whiteColor: '#ffffff',
    greyColor: '#fafafa',

    dangerColor: '#a61c3c', // Deep Carmine
  },
};
