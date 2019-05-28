import React from 'react';

import { tuplify } from 'utils';

export const palette = {
  lightColor: '#615b69',
  mainColor: '#37323e', // Onyx
  darkColor: '#110a18',

  whiteColor: '#ffffff',

  dangerColor: '#a61c3c', // Deep Carmine
};

export const themes = {
  dark: {
    ...palette,

    backgroundColor: palette.darkColor,
    textColor: palette.whiteColor,

    headerBackgroundColor: palette.lightColor,
  },
  light: {
    ...palette,

    backgroundColor: palette.whiteColor,
    textColor: palette.darkColor,

    headerBackgroundColor: palette.mainColor,
  },
};

const defaultContextState = {
  isDark: false,
  toggle(): void {},
};

const ThemeContext = React.createContext(defaultContextState);

export function useTheme(): typeof defaultContextState {
  return React.useContext(ThemeContext);
}

function setTheme(theme: typeof themes.light): void {
  Object.keys(theme).forEach(
    (key): void => {
      const k = key as keyof typeof theme;
      const cssKey = `--${k}`;
      const cssValue = theme[k];
      document.body.style.setProperty(cssKey, cssValue);
    },
  );
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function useDarkTheme() {
    const [themeState, setThemeState] = React.useState({
      hasThemeMounted: false,
      isDark: false,
    });

    React.useEffect((): void => {
      const isDark = localStorage.getItem('isDark') === 'true';
      setTheme(isDark ? themes.dark : themes.light);
      setThemeState({ hasThemeMounted: true, isDark });
    }, []);

    return tuplify(themeState, setThemeState);
  }

  const [themeState, setThemeState] = useDarkTheme();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark: themeState.isDark,
        toggle(): void {
          const isDark = !themeState.isDark;
          localStorage.setItem('isDark', JSON.stringify(isDark));
          setTheme(isDark ? themes.dark : themes.light);
          setThemeState({ ...themeState, isDark });
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
