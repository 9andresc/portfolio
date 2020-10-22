import React, { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { theme } from 'utils/theme';

type StyledHeadingProps = {
  align?: 'left' | 'center' | 'right';
  bg?: keyof typeof theme.colors | 'transparent';
  color?: keyof typeof theme.colors;
  styles?: CSSProperties;
};

const StyledH1 = styled.h1<StyledHeadingProps>(({ align, bg, color, styles, theme }) => ({
  margin: '0',
  marginBottom: `${theme.spacing.large}${theme.unit}`,

  backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

  color: theme.colors[color],
  fontFamily: theme.fontFamilies.bold,
  fontSize: `${theme.headingSizes.h1}${theme.unit}`,
  lineHeight: `${theme.headingSizes.h1}${theme.unit}`,
  textAlign: align,
  ...styles,
}));

const StyledH2 = styled.h2<StyledHeadingProps>(({ align, bg, color, styles, theme }) => ({
  margin: '0',
  marginBottom: `${theme.spacing.large}${theme.unit}`,

  backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

  color: theme.colors[color],
  fontFamily: theme.fontFamilies.bold,
  fontSize: `${theme.headingSizes.h2}${theme.unit}`,
  lineHeight: `${theme.headingSizes.h2}${theme.unit}`,
  textAlign: align,
  ...styles,
}));

const StyledH3 = styled.h3<StyledHeadingProps>(({ align, bg, color, styles, theme }) => ({
  margin: '0',
  marginBottom: `${theme.spacing.large}${theme.unit}`,

  backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

  color: theme.colors[color],
  fontFamily: theme.fontFamilies.bold,
  fontSize: `${theme.headingSizes.h3}${theme.unit}`,
  lineHeight: `${theme.headingSizes.h3}${theme.unit}`,
  textAlign: align,
  ...styles,
}));

type HeadingProps = {
  children: ReactNode;
  id?: string;
  level?: '1' | '2' | '3';
} & StyledHeadingProps;

export function Heading({
  align = 'left',
  bg = 'transparent',
  children,
  color = 'white',
  id,
  level = '1',
  styles,
}: HeadingProps): React.ReactElement {
  let StyledHeading;
  if (level === '1') {
    StyledHeading = StyledH1;
  } else if (level === '2') {
    StyledHeading = StyledH2;
  } else {
    StyledHeading = StyledH3;
  }

  return (
    <StyledHeading align={align} bg={bg} color={color} id={id} styles={styles}>
      {children}
    </StyledHeading>
  );
}
