import React, { ReactElement } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { theme } from 'utils/theme';

type StyledTextProps = {
  align?: 'left' | 'center' | 'right';
  bg?: keyof typeof theme.colors | 'transparent';
  color?: keyof typeof theme.colors;
  size?: 'small' | 'medium' | 'large';
  styles?: CSSProperties;
  weight?: 'normal' | 'bold';
};

const StyledText = styled.p<StyledTextProps>(({ align, bg, color, size, styles, theme, weight }) => {
  const fontFamily = theme.fontFamilies[weight];
  const sizeValue = theme.textSizes[size];

  return {
    margin: '0',
    marginBottom: `${theme.spacing.large}${theme.unit}`,

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors[color],
    fontFamily,
    fontSize: `${sizeValue}${theme.unit}`,
    lineHeight: `${sizeValue}${theme.unit}`,
    textAlign: align,
    ...styles,
  };
});

type TextProps = {
  children: React.ReactNode;
  id?: string;
} & StyledTextProps;

export function Text({
  align = 'left',
  bg = 'transparent',
  children,
  color = 'white',
  id,
  size = 'medium',
  styles,
  weight = 'normal',
}: TextProps): ReactElement {
  return (
    <StyledText align={align} bg={bg} color={color} id={id} size={size} styles={styles} weight={weight}>
      {children}
    </StyledText>
  );
}
