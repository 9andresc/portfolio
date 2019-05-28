import React from 'react';
import { useTranslation } from 'react-i18next';

import { GitHubIcon, LinkedInIcon, TwitterIcon } from 'components/icons';
import { Wrapper } from 'components/wrapper';

import styles from './styles.module.css';

export function Footer(): JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Wrapper additionalClass={styles.wrapper}>
        <GitHubIcon
          size={2}
          title={t('footer.gitHubTitle')}
          titleId="github-title"
        />

        <LinkedInIcon
          size={2}
          title={t('footer.linkedInTitle')}
          titleId="linkedin-title"
        />

        <TwitterIcon
          size={2}
          title={t('footer.twitterTitle')}
          titleId="twitter-title"
        />
      </Wrapper>
    </footer>
  );
}
