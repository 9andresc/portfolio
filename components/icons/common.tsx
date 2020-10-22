import React, { ReactElement, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { theme } from 'utils/theme';

type WrapperProps = {
  height: number;
  styles?: CSSProperties;
  width: number;
};

const Wrapper = styled.div<WrapperProps>(({ height, styles, width }) => ({
  position: 'relative',

  height: height + 'rem',
  width: width + 'rem',
  ...styles,
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
  children: ReactNode;
  ratio: number;
  size: keyof typeof theme.sizes;
  styles?: CSSProperties;
  title: string;
  titleId: string;
  viewBox: string;
};

export function Container({ children, ratio, size, styles, title, titleId, viewBox }: ContainerProps): ReactElement {
  const height = theme.sizes[size];
  const width = height * ratio;

  return (
    <Wrapper height={height} styles={styles} width={width}>
      <SVG aria-labelledby={titleId} fill="none" role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <title id={titleId}>{title}</title>
        {children}
      </SVG>
    </Wrapper>
  );
}

export type IconProps = {
  color?: string;
  size?: keyof typeof theme.sizes;
  styles?: CSSProperties;
  title?: string;
  titleId?: string;
};
