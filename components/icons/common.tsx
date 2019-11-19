import React from 'react';

import styled from 'lib/styled';
import { theme } from 'utils/theme';
import { CSSProperties } from '@emotion/serialize';

type WrapperProps = {
  css?: CSSProperties;
  height: number;
  width: number;
};

const Wrapper = styled.div(({ css, height, width }: WrapperProps) => ({
  position: 'relative',

  height: height + 'rem',
  width: width + 'rem',
  ...css,
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
  css?: CSSProperties;
  ratio: number;
  size: keyof typeof theme.sizes;
  title: string;
  titleId: string;
  viewBox: string;
};

export function Container({ children, css, ratio, size, title, titleId, viewBox }: ContainerProps) {
  const height = theme.sizes[size];
  const width = height * ratio;

  return (
    <Wrapper css={css} height={height} width={width}>
      <SVG aria-labelledby={titleId} fill="none" role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <title id={titleId}>{title}</title>
        {children}
      </SVG>
    </Wrapper>
  );
}

export type IconProps = {
  css?: CSSProperties;
  color?: string;
  size?: keyof typeof theme.sizes;
  title?: string;
  titleId?: string;
};
