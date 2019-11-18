import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledHeadingProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  level?: '1' | '2' | '3';
  marginBottom?: keyof typeof theme.spacing;
};

function renderStyledHeading({ bg, level, marginBottom }: StyledHeadingProps) {
  return styled[`h${level}`](({ theme }) => {
    const marginBottomValue = theme.spacing[marginBottom];
    const sizeValue = theme.headingSizes[`h${level}`];
    const unit = marginBottomValue === 'auto' ? '' : theme.unit;

    return {
      margin: '0',
      marginBottom: `${marginBottomValue}${unit}`,

      backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

      color: theme.colors.white,
      fontFamily: 'OCFormatSansBold, Helvetica, sans-serif',
      fontSize: `${sizeValue}${unit}`,
      lineHeight: `${sizeValue}${unit}`,
    };
  });
}

type HeadingProps = {
  children: React.ReactNode;
  id?: string;
} & StyledHeadingProps;

export function Heading({ bg = 'transparent', children, id, level = '1', marginBottom = 'large' }: HeadingProps) {
  const StyledHeading = renderStyledHeading({ bg, level, marginBottom });
  return <StyledHeading id={id}>{children}</StyledHeading>;
}
