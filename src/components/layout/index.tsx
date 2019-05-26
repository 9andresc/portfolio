import React from 'react';
import { useTranslation } from 'react-i18next';

import 'lib/i18n';
import { ThemeProvider } from 'utils/theming';

import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <header className={styles.header}>{t('header.title')}</header>

      <main>{children}</main>

      <footer>footer</footer>
    </ThemeProvider>
  );
}
