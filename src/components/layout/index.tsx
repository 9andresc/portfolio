import React from 'react';

import 'lib/i18n';
import { ThemeProvider } from 'utils/theming';

import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';
import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header />

        <Main>{children}</Main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
