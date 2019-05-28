import React from 'react';

import { GitHub } from './github';
import { LinkedIn } from './linkedin';
import { Logo } from './logo';
import styles from './styles.module.css';
import { Twitter } from './twitter';

interface ContainerProps {
  children: React.ReactNode;
  height: number;
  width: number;
}

function Container({ children, height, width }: ContainerProps): JSX.Element {
  return (
    <div
      className={styles.container}
      style={
        {
          '--height': `${height}rem`,
          '--width': `${width}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface IconProps {
  color?: string;
  size: number;
  title: string;
  titleId: string;
}

export function GitHubIcon({
  color,
  size,
  title,
  titleId,
}: IconProps): JSX.Element {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} width={width}>
      <GitHub
        className={styles.svg}
        color={color}
        title={title}
        titleId={titleId}
      />
    </Container>
  );
}

export function LinkedInIcon({
  color,
  size,
  title,
  titleId,
}: IconProps): JSX.Element {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} width={width}>
      <LinkedIn
        className={styles.svg}
        color={color}
        title={title}
        titleId={titleId}
      />
    </Container>
  );
}

export function LogoIcon({ size, title, titleId }: IconProps): JSX.Element {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} width={width}>
      <Logo className={styles.svg} title={title} titleId={titleId} />
    </Container>
  );
}

export function TwitterIcon({
  color,
  size,
  title,
  titleId,
}: IconProps): JSX.Element {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} width={width}>
      <Twitter
        className={styles.svg}
        color={color}
        title={title}
        titleId={titleId}
      />
    </Container>
  );
}
