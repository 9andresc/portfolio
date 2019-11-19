import React from 'react';

import { Heading } from 'components/heading';
import { Text } from 'components/text';
import styled from 'lib/styled';
import { theme } from 'utils/theme';

const Wrapper = styled.div(({ theme }) => ({
  padding: `0 ${theme.spacing.medium}${theme.unit}`,
  width: '100%',

  backgroundColor: theme.colors.dark,

  [theme.mediaQueries.medium]: {
    padding: '0',
  },
}));

const Section = styled.section(({ theme }) => ({
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `${theme.spacing.xlarge}${theme.unit} 0`,
  width: '100%',
}));

const BadgesContainer = styled.ul(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
  width: '100%',

  listStyleType: 'none',

  [theme.mediaQueries.small]: {
    flexDirection: 'row',
  },
}));

type BadgeProps = {
  bg: keyof typeof theme.colors;
};

const Badge = styled.li<BadgeProps>(({ bg, theme }) => ({
  flex: '1',
  padding: `${theme.spacing.medium}${theme.unit}`,

  backgroundColor: theme.colors[bg],
}));

export function Intro() {
  return (
    <Wrapper>
      <Section>
        <Heading>Hey there</Heading>
        <Heading level="2">Thanks for passing by</Heading>
        <Heading level="3">I'm Andres</Heading>
        <Text>And my day-to-day role is of a Full Stack Developer. I enjoy creating web applications that are:</Text>

        <BadgesContainer>
          <Badge bg="light">
            <Text align="center" marginBottom="none" weight="bold">
              Visually Harmonic
            </Text>
          </Badge>
          <Badge bg="main">
            <Text align="center" marginBottom="none" weight="bold">
              Easily Maintainable
            </Text>
          </Badge>
          <Badge bg="dark">
            <Text align="center" marginBottom="none" weight="bold">
              Performant
            </Text>
          </Badge>
        </BadgesContainer>
      </Section>
    </Wrapper>
  );
}
