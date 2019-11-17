import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledTextProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  marginBottom?: keyof typeof theme.spacing;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
};

const StyledText = styled.p<StyledTextProps>(({ bg, marginBottom, size, theme, weight }) => {
  const marginBottomValue = theme.spacing[marginBottom];
  const sizeValue = theme.textSizes[size];
  const unit = marginBottomValue === 'auto' ? '' : theme.unit;

  return {
    margin: '0',
    marginBottom: `${marginBottomValue}${unit}`,

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors.white,
    fontSize: `${sizeValue}${unit}`,
    fontWeight: weight,
    lineHeight: `${sizeValue}${unit}`,
  };
});

type TextProps = {
  children: React.ReactNode;
  id?: string;
} & StyledTextProps;

export function Text({
  bg = 'transparent',
  children,
  id,
  marginBottom = 'large',
  size = 'medium',
  weight = 'normal',
}: TextProps) {
  return (
    <StyledText bg={bg} id={id} marginBottom={marginBottom} size={size} weight={weight}>
      {children}
    </StyledText>
  );
}
