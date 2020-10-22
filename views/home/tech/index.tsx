import React, { ReactElement } from 'react';
import styled from 'styled-components';

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
import { theme, Theme } from 'utils/theme';

const Section = styled.div(({ theme }) => ({
  width: '100%',

  backgroundColor: theme.colors.secondary,
}));

const Wrapper = styled.section(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `${theme.spacing.xlarge}${theme.unit} ${theme.spacing.medium}${theme.unit}`,
  width: '100%',

  [theme.mediaQueries.medium]: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
}));

const headingStyles = (theme: Theme) => ({
  [theme.mediaQueries.medium]: {
    marginBottom: '0',
  },
});

const IconsContainer = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',

  [theme.mediaQueries.medium]: {
    marginRight: `${theme.spacing.xlarge}${theme.unit}`,
    width: 'auto',
  },
}));

const IconsRow = styled.div(({ theme }) => ({
  display: 'flex',
  marginBottom: `${theme.spacing.medium}${theme.unit}`,

  '&:last-of-type': {
    marginBottom: '0',
  },
}));

const iconStyles = (theme: Theme) => ({
  marginRight: `${theme.spacing.medium}${theme.unit}`,
  filter: 'grayscale(100%)',

  '&:last-of-type': {
    marginRight: '0',
  },
});

export function Tech(): ReactElement {
  return (
    <Section>
      <Wrapper>
        <Heading styles={headingStyles(theme)}>Tech I love</Heading>

        <IconsContainer>
          <IconsRow>
            <FigmaIcon size="xxlarge" styles={iconStyles(theme)} />
            <FirefoxIcon size="xxlarge" styles={iconStyles(theme)} />
            <NextJSIcon size="xxlarge" styles={iconStyles(theme)} />
            <NodeJSIcon size="xxlarge" styles={iconStyles(theme)} />
          </IconsRow>
          <IconsRow>
            <PostgreSQLIcon size="xxlarge" styles={iconStyles(theme)} />
            <ReactIcon size="xxlarge" styles={iconStyles(theme)} />
            <TypescriptIcon size="xxlarge" styles={iconStyles(theme)} />
            <VSCodeIcon size="xxlarge" styles={iconStyles(theme)} />
          </IconsRow>
        </IconsContainer>
      </Wrapper>
    </Section>
  );
}
