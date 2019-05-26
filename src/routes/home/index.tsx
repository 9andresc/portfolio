import React from 'react';
import { useTranslation } from 'react-i18next';

import SEO from 'components/seo';
import { useTheme } from 'utils/theming';

export default function Home(): JSX.Element {
  const { t } = useTranslation();
  const themeState = useTheme();

  return (
    <>
      <SEO title={t('home.title')} />

      <button type="button" onClick={themeState.toggle}>
        Toggle theme
      </button>

      <p>{themeState.isDark.toString()}</p>
    </>
  );
}
