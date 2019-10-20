import React from 'react';

import styled from 'lib/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',
});

const Header = styled.header(({ theme }) => ({
  height: '4rem',
  width: '100%',

  backgroundColor: theme.colors.mainColor,

  color: theme.colors.whiteColor,
}));

const Main = styled.main(({ theme }) => ({
  flex: '1',

  backgroundColor: theme.colors.whiteColor,

  color: theme.colors.mainColor,
}));

const Footer = styled.footer(({ theme }) => ({
  height: '4rem',
  width: '100%',

  backgroundColor: theme.colors.mainColor,

  color: theme.colors.whiteColor,
}));

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header>Header</Header>

      <Main>{children}</Main>

      <Footer>Footer</Footer>
    </Container>
  );
}

export { Layout };
