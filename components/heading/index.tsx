import { CSSProperties } from '@emotion/serialize';
import React from 'react';

import styled from 'lib/styled';
import { theme, Theme } from 'utils/theme';

type StyledHeadingProps = {
  align?: 'left' | 'center' | 'right';
  bg?: keyof typeof theme.colors | 'transparent';
  color?: keyof typeof theme.colors;
  level?: '1' | '2' | '3';
};

let StyledHeading = styled.h1<StyledHeadingProps & { as: string }>(({ align, bg, color, level, theme }) => {
  const sizeValue = theme.headingSizes[`h${level}`];

  return {
    margin: '0',
    marginBottom: `${theme.spacing.large}${theme.unit}`,

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors[color],
    fontFamily: 'OCFormatSansBold, Helvetica, sans-serif',
    fontSize: `${sizeValue}${theme.unit}`,
    lineHeight: `${sizeValue}${theme.unit}`,
    textAlign: align,
  };
});

type HeadingProps = {
  children: React.ReactNode;
  id?: string;
  styles?: (theme: Theme) => CSSProperties;
} & StyledHeadingProps;

export function Heading({
  align = 'left',
  bg = 'transparent',
  children,
  color = 'white',
  id,
  level = '1',
  styles,
}: HeadingProps) {
  if (styles) {
    StyledHeading = styled(StyledHeading)(({ theme }) => ({ ...styles(theme) }));
  }

  return (
    <StyledHeading align={align} as={`h${level}`} bg={bg} color={color} id={id} level={level}>
      {children}
    </StyledHeading>
  );
}
