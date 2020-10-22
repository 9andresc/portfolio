import React, { ReactElement } from 'react';

import { theme } from 'utils/theme';

import { Container, IconProps } from './common';

export function GitHub({
  color = theme.colors.dark,
  size = 'medium',
  styles,
  title = 'github',
  titleId = 'github',
}: IconProps): ReactElement {
  return (
    <Container ratio={1} size={size} styles={styles} title={title} titleId={titleId} viewBox="0 0 50 50">
      <path
        d="M25.0365 24.8677C25.025 24.8677 25.012 24.8672 25 24.8667C24.9875 24.8672 24.9745 24.8677 24.963 24.8677C21.8604 24.8677 19.1266 24.0823 17.5109 25.5656C16.5427 26.4557 16.1349 27.5281 16.1349 28.6828C16.1349 33.5062 19.9995 34.0984 24.9625 34.0984H25.0365C29.9995 34.0984 33.8641 33.5057 33.8641 28.6828C33.8641 27.5276 33.4562 26.4557 32.488 25.5656C30.8724 24.0823 28.1391 24.8677 25.0365 24.8677ZM20.8167 31.4589C19.8724 31.4589 19.1068 30.3984 19.1068 29.0906C19.1068 27.7828 19.8724 26.7229 20.8167 26.7229C21.7609 26.7229 22.5276 27.7828 22.5276 29.0906C22.5276 30.3984 21.7609 31.4589 20.8167 31.4589ZM29.1828 31.4589C28.238 31.4589 27.4719 30.3984 27.4719 29.0906C27.4719 27.7828 28.238 26.7229 29.1828 26.7229C30.1266 26.7229 30.8927 27.7828 30.8927 29.0906C30.8927 30.3984 30.1271 31.4589 29.1828 31.4589ZM25 0C11.1922 0 0 11.1927 0 25C0 38.8073 11.1922 50 25 50C38.8068 50 50 38.8073 50 25C50 11.1927 38.8068 0 25 0ZM27.2802 35.2609C26.8323 35.2609 25.9417 35.262 25 35.263C24.0578 35.262 23.1667 35.2609 22.7193 35.2609C20.7385 35.2609 12.8948 35.1094 12.8948 25.6542C12.8948 23.4786 13.6406 21.887 14.8609 20.5615C14.6661 20.0807 14.6562 17.3505 15.6953 14.737C15.6953 14.737 18.0786 14.9984 21.6849 17.4729C22.4406 17.2641 23.7203 17.1599 25 17.1599C26.2786 17.1599 27.5583 17.2635 28.3151 17.4729C31.9208 14.9984 34.3036 14.737 34.3036 14.737C35.3427 17.3505 35.3333 20.0807 35.1385 20.5615C36.3594 21.887 37.1052 23.4792 37.1052 25.6542C37.1052 35.1094 29.2609 35.2609 27.2802 35.2609Z"
        fill={color}
      />
    </Container>
  );
}
