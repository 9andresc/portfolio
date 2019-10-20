import React from 'react';

import styled from 'lib/styled';

type WrapperProps = {
  height: number;
  width: number;
};

const Wrapper = styled.div(({ height, width }: WrapperProps) => ({
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
  size: number;
  title: string;
  titleId: string;
  viewBox: string;
};

export function Container({ children, ratio, size, title, titleId, viewBox }: ContainerProps) {
  const height = size;
  const width = height * ratio;

  return (
    <Wrapper height={height} width={width}>
      <SVG aria-labelledby={titleId} fill="none" role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <title id={titleId}>{title}</title>
        {children}
      </SVG>
    </Wrapper>
  );
}

export type IconProps = {
  color?: string;
  size?: number;
  title?: string;
  titleId?: string;
};
