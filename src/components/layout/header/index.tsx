import React from 'react';
import { useTranslation } from 'react-i18next';

import { LogoIcon } from 'components/icons';
import { Wrapper } from 'components/wrapper';

import styles from './styles.module.css';

export function Header(): JSX.Element {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Wrapper additionalClass={styles.wrapper}>
        <LogoIcon size={2} title={t('header.logoTitle')} titleId="logo-title" />

        <a
          className={styles.resumeLink}
          download="9andresc-resume.pdf"
          href={'resume.pdf'}
        >
          {t('header.resumeLink')}
        </a>
      </Wrapper>
    </header>
  );
}
