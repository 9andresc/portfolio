import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledTextProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  size: 'small' | 'medium' | 'large';
  weight: 'normal' | 'bold';
};

const StyledText = styled.p<StyledTextProps>(({ bg, size, theme, weight }) => {
  const sizeValue = theme.textSizes[size];
  const { unit } = theme;

  return {
    margin: '0',
    marginBottom: '1.5rem',

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors.white,
    fontSize: `${sizeValue}${unit}`,
    fontWeight: weight,
    lineHeight: `${sizeValue}${unit}`,
  };
});

type TextProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  children: React.ReactNode;
  id?: string;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
};

export function Text({ bg = 'transparent', children, id, size = 'medium', weight = 'normal' }: TextProps) {
  return (
    <StyledText bg={bg} id={id} size={size} weight={weight}>
      {children}
    </StyledText>
  );
}
