import React from 'react';
import { useTranslation } from 'react-i18next';

import { GitHubIcon, LinkedInIcon, TwitterIcon } from 'components/icons';
import { Wrapper } from 'components/wrapper';
import { palette, useTheme } from 'utils/theming';

import styles from './styles.module.css';

export function Footer(): JSX.Element {
  const { t } = useTranslation();
  const themeState = useTheme();

  return (
    <footer className={styles.footer}>
      <Wrapper additionalClass={styles.wrapper}>
        <GitHubIcon
          color={themeState.isDark ? palette.whiteColor : palette.lightColor}
          size={2}
          title={t('footer.gitHubTitle')}
          titleId="github-title"
        />

        <LinkedInIcon
          color={themeState.isDark ? palette.whiteColor : palette.lightColor}
          size={2}
          title={t('footer.linkedInTitle')}
          titleId="linkedin-title"
        />

        <TwitterIcon
          color={themeState.isDark ? palette.whiteColor : palette.lightColor}
          size={2}
          title={t('footer.twitterTitle')}
          titleId="twitter-title"
        />
      </Wrapper>
    </footer>
  );
}
