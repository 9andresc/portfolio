import NextLink from 'next/link';

import styled from 'lib/styled';
import { theme } from 'utils/theme';

type StyledLinkProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  size: 'small' | 'medium' | 'large';
  weight: 'normal' | 'bold';
};

const StyledLink = styled.a<StyledLinkProps>(({ bg, size, theme, weight }) => {
  const fontFamily = theme.fontFamilies[weight];
  const sizeValue = theme.textSizes[size];
  const { unit } = theme;

  return {
    margin: '0',

    backgroundColor: bg === 'transparent' ? bg : theme.colors[bg],

    color: theme.colors.white,
    fontFamily,
    fontSize: `${sizeValue}${unit}`,
    lineHeight: `${sizeValue}${unit}`,
    textDecoration: 'underline',
  };
});

type LinkProps = {
  bg?: keyof typeof theme.colors | 'transparent';
  children: React.ReactNode;
  download?: string;
  href: string;
  id?: string;
  size?: 'small' | 'medium' | 'large';
  useNext?: boolean;
  weight?: 'normal' | 'bold';
};

export function Link({
  bg = 'transparent',
  children,
  download,
  href,
  id,
  size = 'medium',
  useNext = false,
  weight = 'normal',
}: LinkProps) {
  if (useNext) {
    return (
      <NextLink href={href}>
        <StyledLink bg={bg} id={id} size={size} weight={weight}>
          {children}
        </StyledLink>
      </NextLink>
    );
  }

  return (
    <StyledLink download={download} bg={bg} href={href} id={id} size={size} weight={weight}>
      {children}
    </StyledLink>
  );
}
