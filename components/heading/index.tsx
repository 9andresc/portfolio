import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledHeadingProps = {
  align?: 'left' | 'center' | 'right';
  bg?: keyof typeof theme.colors | 'transparent';
  color?: keyof typeof theme.colors;
  level?: '1' | '2' | '3';
  marginBottom?: keyof typeof theme.spacing;
};

function renderStyledHeading({ align, bg, color, level, marginBottom }: StyledHeadingProps) {
  return styled[`h${level}`](({ theme }) => {
    const marginBottomValue = theme.spacing[marginBottom];
    const sizeValue = theme.headingSizes[`h${level}`];
    const unit = marginBottomValue === 'auto' ? '' : theme.unit;

    return {
      margin: '0',
      marginBottom: `${marginBottomValue}${unit}`,

      backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

      color: theme.colors[color],
      fontFamily: 'OCFormatSansBold, Helvetica, sans-serif',
      fontSize: `${sizeValue}${unit}`,
      lineHeight: `${sizeValue}${unit}`,
      textAlign: align,
    };
  });
}

type HeadingProps = {
  children: React.ReactNode;
  id?: string;
} & StyledHeadingProps;

export function Heading({
  align = 'left',
  bg = 'transparent',
  children,
  color = 'white',
  id,
  level = '1',
  marginBottom = 'large',
}: HeadingProps) {
  const StyledHeading = renderStyledHeading({ align, bg, color, level, marginBottom });
  return <StyledHeading id={id}>{children}</StyledHeading>;
}
