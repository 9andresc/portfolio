import React from 'react';

import { Heading } from 'components/heading';
import { Text } from 'components/text';
import styled from 'lib/styled';

const Wrapper = styled.div(({ theme }) => ({
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `0 ${theme.spacing.medium}${theme.unit}`,
  width: '100%',

  [theme.mediaQueries.medium]: {
    padding: '0',
  },
}));

const Section = styled.section(({ theme }) => ({
  padding: `${theme.spacing.medium}${theme.unit} 0`,
  width: '100%',

  backgroundColor: theme.colors.dark,

  color: theme.colors.white,
}));

export function Intro() {
  return (
    <Wrapper>
      <Section>
        <Heading>Hey there</Heading>
        <Heading level="2">Thanks for passing by</Heading>
        <Heading level="3">I'm Andres</Heading>
        <Text marginBottom="none">
          And my day-to-day role is of a Full Stack Developer. I try to create web expiriences that are:
        </Text>
      </Section>
    </Wrapper>
  );
}
