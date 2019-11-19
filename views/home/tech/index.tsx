import React from 'react';

import { Heading } from 'components/heading';
import { Text } from 'components/text';
import styled from 'lib/styled';

const Wrapper = styled.div(({ theme }) => ({
  padding: `0 ${theme.spacing.medium}${theme.unit}`,
  width: '100%',

  backgroundColor: theme.colors.secondary,

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

export function Tech() {
  return (
    <Wrapper>
      <Section>
        <Heading align="right" marginBottom="none">Tech I love</Heading>
      </Section>
    </Wrapper>
  );
}
