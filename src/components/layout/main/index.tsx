import React from 'react';

import { Wrapper } from 'components/wrapper';

import styles from './styles.module.css';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps): JSX.Element {
  return (
    <main className={styles.main}>
      <Wrapper additionalClass={styles.wrapper}>{children}</Wrapper>
    </main>
  );
}
