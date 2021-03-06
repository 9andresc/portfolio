import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Heading } from 'components/heading';
import { Text } from 'components/text';
import { theme, Theme } from 'utils/theme';

const Wrapper = styled.div(({ theme }) => ({
  width: '100%',

  backgroundColor: theme.colors.dark,
}));

const Section = styled.section(({ theme }) => ({
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `${theme.spacing.xlarge}${theme.unit} ${theme.spacing.medium}${theme.unit}`,
  width: '100%',
}));

const BadgesContainer = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
  width: '100%',

  listStyleType: 'none',

  [theme.mediaQueries.small]: {
    flexDirection: 'row',
  },
});

type BadgeProps = {
  bg: keyof typeof theme.colors;
};

const Badge = styled.li<BadgeProps>(({ bg, theme }) => ({
  flex: '1',
  padding: `${theme.spacing.medium}${theme.unit}`,

  backgroundColor: theme.colors[bg],
}));

const badgeTextStyles = (theme: Theme) => ({
  marginBottom: theme.spacing.none,
});

export function Intro(): ReactElement {
  return (
    <Wrapper>
      <Section>
        <Heading>Hey there</Heading>
        <Heading level="2">Thanks for passing by</Heading>
        <Heading level="3">I&apos;m Andres</Heading>
        <Text>And my day-to-day role is of a Full Stack Developer. I enjoy creating web applications that are:</Text>

        <BadgesContainer>
          <Badge bg="light">
            <Text align="center" styles={badgeTextStyles(theme)} weight="bold">
              Visually Harmonic
            </Text>
          </Badge>
          <Badge bg="main">
            <Text align="center" styles={badgeTextStyles(theme)} weight="bold">
              Easily Maintainable
            </Text>
          </Badge>
          <Badge bg="dark">
            <Text align="center" styles={badgeTextStyles(theme)} weight="bold">
              Performant
            </Text>
          </Badge>
        </BadgesContainer>
      </Section>
    </Wrapper>
  );
}
