import React from 'react';

import { Heading } from 'components/heading';
import {
  FigmaIcon,
  FirefoxIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  ReactIcon,
  TypescriptIcon,
  VSCodeIcon,
} from 'components/icons';
import styled from 'lib/styled';

const Section = styled.div(({ theme }) => ({
  padding: `0 ${theme.spacing.medium}${theme.unit}`,
  width: '100%',

  backgroundColor: theme.colors.secondary,

  [theme.mediaQueries.medium]: {
    padding: '0',
  },
}));

const Wrapper = styled.section(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `${theme.spacing.xlarge}${theme.unit} 0`,
  width: '100%',

  [theme.mediaQueries.medium]: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
}));

const IconsContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  [theme.mediaQueries.medium]: {
    width: 'auto',
  },
}));

export function Tech() {
  return (
    <Section>
      <Wrapper>
        <Heading align="right" marginBottom="none">
          Tech I love
        </Heading>

        <IconsContainer>
          <FigmaIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <FirefoxIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <NextJSIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <NodeJSIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <PostgreSQLIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <ReactIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <TypescriptIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
          <VSCodeIcon css={{ filter: 'grayscale(100%)' }} size="xxlarge" />
        </IconsContainer>
      </Wrapper>
    </Section>
  );
}
