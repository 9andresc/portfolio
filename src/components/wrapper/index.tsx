import cx from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface WrapperProps {
  additionalClass: string;
  children: React.ReactNode;
}

export function Wrapper({
  additionalClass,
  children,
}: WrapperProps): JSX.Element {
  return <div className={cx(styles.wrapper, additionalClass)}>{children}</div>;
}
