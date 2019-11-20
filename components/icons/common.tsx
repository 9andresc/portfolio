import { CSSProperties } from '@emotion/serialize';
import React from 'react';

import styled from 'lib/styled';
import { theme, Theme } from 'utils/theme';

type WrapperProps = {
  height: number;
  width: number;
};

const Wrapper = styled.div<WrapperProps>(({ height, width }) => ({
  position: 'relative',

  height: height + 'rem',
  width: width + 'rem',
}));

const SVG = styled.svg({
  bottom: '0',
  left: '0',
  position: 'absolute',
  right: '0',
  top: '0',

  width: '100%',
  height: '100%',
});

type ContainerProps = {
  children: React.ReactNode;
  ratio: number;
  size: keyof typeof theme.sizes;
  styles?: (theme: Theme) => CSSProperties;
  title: string;
  titleId: string;
  viewBox: string;
};

export function Container({ children, ratio, size, styles, title, titleId, viewBox }: ContainerProps) {
  const height = theme.sizes[size];
  const width = height * ratio;

  let StyledWrapper = Wrapper;
  if (styles) {
    StyledWrapper = styled(Wrapper)(({ theme }) => ({ ...styles(theme) }));
  }

  return (
    <StyledWrapper height={height} width={width}>
      <SVG aria-labelledby={titleId} fill="none" role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <title id={titleId}>{title}</title>
        {children}
      </SVG>
    </StyledWrapper>
  );
}

export type IconProps = {
  color?: string;
  size?: keyof typeof theme.sizes;
  styles?: (theme: Theme) => CSSProperties;
  title?: string;
  titleId?: string;
};
