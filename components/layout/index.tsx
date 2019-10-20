import React from 'react';

import { GitHubIcon, LinkedInIcon, LogoIcon, TwitterIcon } from 'components/icons';
import styled from 'lib/styled';
import { breakpoints, mediaQueries, theme } from 'utils/styles';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
});

const Header = styled.header(({ theme }) => ({
  height: '4rem',
  width: '100%',

  backgroundColor: theme.colors.main,

  color: theme.colors.white,
}));

const HeaderWrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  height: 'inherit',
  margin: '0 auto',
  maxWidth: breakpoints[1] + 'px',
  padding: '0 1rem',

  [mediaQueries.md]: {
    padding: '0',
  },
});

const ResumeLink = styled.a(({ theme }) => ({
  color: theme.colors.white,
  fontSize: '1rem',
  fontWeight: 'bold',

  '&:visited': {
    color: theme.colors.white,
  },
}));

const Main = styled.main(({ theme }) => ({
  flex: '1',

  backgroundColor: theme.colors.white,
}));

const MainWrapper = styled.div({
  flex: 1,
  margin: '0 auto',
  maxWidth: breakpoints[1] + 'px',
  padding: '0 1rem',

  [mediaQueries.md]: {
    padding: '0',
  },
});

const Footer = styled.footer(({ theme }) => ({
  height: '4rem',
  width: '100%',

  backgroundColor: theme.colors.light,

  color: theme.colors.dark,
}));

const FooterWrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: 'inherit',
  margin: '0 auto',
  maxWidth: breakpoints[1] + 'px',
  padding: '0 1rem',

  [mediaQueries.md]: {
    padding: '0',
  },
});

const FooterLink = styled.a({
  marginRight: '1rem',

  '&:last-of-type': {
    marginRight: '0',
  },
});

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <LogoIcon size={3} />

          <ResumeLink download="9andresc-resume.pdf" href={'/resume.pdf'}>
            Get my resume
          </ResumeLink>
        </HeaderWrapper>
      </Header>

      <Main>
        <MainWrapper>{children}</MainWrapper>
      </Main>

      <Footer>
        <FooterWrapper>
          <FooterLink href="https://github.com/9andresc" target="_blank">
            <GitHubIcon color={theme.colors.white} size={2} />
          </FooterLink>

          <FooterLink href="https://www.linkedin.com/in/9andresc/" target="_blank">
            <LinkedInIcon color={theme.colors.white} size={2} />
          </FooterLink>

          <FooterLink href="https://twitter.com/9andresc" target="_blank">
            <TwitterIcon color={theme.colors.white} size={2} />
          </FooterLink>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
