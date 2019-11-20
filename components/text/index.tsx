import { CSSProperties } from '@emotion/serialize';
import React from 'react';

import styled from 'lib/styled';
import { theme, Theme } from 'utils/theme';

type StyledTextProps = {
  align?: 'left' | 'center' | 'right';
  bg?: keyof typeof theme.colors | 'transparent';
  color?: keyof typeof theme.colors;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
};

let StyledText = styled.p<StyledTextProps>(({ align, bg, color, size, theme, weight }) => {
  const sizeValue = theme.textSizes[size];
  const fontFamily = (weight === 'normal' ? 'OCFormatSansRegular' : 'OCFormatSansBold') + ', Helvetica, sans-serif';

  return {
    margin: '0',
    marginBottom: `${theme.spacing.medium}${theme.unit}`,

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors[color],
    fontFamily,
    fontSize: `${sizeValue}${theme.unit}`,
    lineHeight: `${sizeValue}${theme.unit}`,
    textAlign: align,
  };
});

type TextProps = {
  children: React.ReactNode;
  id?: string;
  styles?: (theme: Theme) => CSSProperties;
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
}: TextProps) {
  if (styles) {
    StyledText = styled(StyledText)(({ theme }) => ({ ...styles(theme) }));
  }

  return (
    <StyledText align={align} bg={bg} color={color} id={id} size={size} weight={weight}>
      {children}
    </StyledText>
  );
}
