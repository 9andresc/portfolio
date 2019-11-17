import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledHeadingProps = {
  bg: keyof typeof theme.colors | 'transparent';
  level: '1' | '2' | '3';
};

function renderStyledHeading({ bg, level }: StyledHeadingProps) {
  return styled[`h${level}`](({ theme }) => {
    const sizeValue = theme.headingSizes[`h${level}`];
    const { unit } = theme;

    return {
      margin: '0',
      marginBottom: '1.5rem',

      backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

      color: theme.colors.white,
      fontSize: `${sizeValue}${unit}`,
      fontWeight: 'bold',
      lineHeight: `${sizeValue}${unit}`,
    };
  });
}

type HeadingProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  children: React.ReactNode;
  id?: string;
  level?: '1' | '2' | '3';
};

export function Heading({ bg = 'transparent', children, id, level = '1' }: HeadingProps) {
  const StyledHeading = renderStyledHeading({ bg, level });
  return <StyledHeading id={id}>{children}</StyledHeading>;
}
