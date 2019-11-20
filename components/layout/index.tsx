import React from 'react';

import { GitHubIcon, LinkedInIcon, LogoIcon, TwitterIcon } from 'components/icons';
import { Link } from 'components/link';
import styled from 'lib/styled';
import { theme } from 'utils/theme';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',

  backgroundColor: theme.colors.dark,
}));

const Header = styled.header(({ theme }) => ({
  height: `${theme.spacing.xxlarge}${theme.unit}`,
  width: '100%',

  backgroundColor: theme.colors.dark,

  color: theme.colors.white,
}));

const HeaderWrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  height: 'inherit',
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `0 ${theme.spacing.medium}${theme.unit}`,
  width: '100%',
}));

const Main = styled.main(() => ({
  flex: '1',
}));

const Footer = styled.footer(({ theme }) => ({
  height: `${theme.spacing.xxlarge}${theme.unit}`,
  width: '100%',

  backgroundColor: theme.colors.dark,

  color: theme.colors.dark,
}));

const FooterWrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: 'inherit',
  margin: '0 auto',
  maxWidth: theme.breakpoints[1] + 'px',
  padding: `0 ${theme.spacing.medium}${theme.unit}`,
  width: '100%',
}));

const FooterLink = styled.a({
  marginRight: `${theme.spacing.medium}${theme.unit}`,

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
          <LogoIcon size="xxlarge" />

          <Link download="9andresc-resume.pdf" href="/resume.pdf" weight="bold">
            Get my resume
          </Link>
        </HeaderWrapper>
      </Header>

      <Main>{children}</Main>

      <Footer>
        <FooterWrapper>
          <FooterLink href="https://github.com/9andresc" rel="noopener" target="_blank">
            <GitHubIcon color={theme.colors.white} size="large" />
          </FooterLink>

          <FooterLink href="https://www.linkedin.com/in/9andresc/" rel="noopener" target="_blank">
            <LinkedInIcon color={theme.colors.white} size="large" />
          </FooterLink>

          <FooterLink href="https://twitter.com/9andresc" rel="noopener" target="_blank">
            <TwitterIcon color={theme.colors.white} size="large" />
          </FooterLink>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
