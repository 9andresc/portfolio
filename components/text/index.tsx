import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledTextProps = {
  align?: 'left' | 'center' | 'right';
  bg?: keyof typeof theme.colors | 'transparent';
  marginBottom?: keyof typeof theme.spacing;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
};

const StyledText = styled.p<StyledTextProps>(({ align, bg, marginBottom, size, theme, weight }) => {
  const marginBottomValue = theme.spacing[marginBottom];
  const sizeValue = theme.textSizes[size];
  const unit = marginBottomValue === 'auto' ? '' : theme.unit;
  const fontFamily = (weight === 'normal' ? 'OCFormatSansRegular' : 'OCFormatSansBold') + ', Helvetica, sans-serif';

  return {
    margin: '0',
    marginBottom: `${marginBottomValue}${unit}`,

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors.white,
    fontFamily,
    fontSize: `${sizeValue}${unit}`,
    lineHeight: `${sizeValue}${unit}`,
    textAlign: align,
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
  id,
  marginBottom = 'large',
  size = 'medium',
  weight = 'normal',
}: TextProps) {
  return (
    <StyledText align={align} bg={bg} id={id} marginBottom={marginBottom} size={size} weight={weight}>
      {children}
    </StyledText>
  );
}
