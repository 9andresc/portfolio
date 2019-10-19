import React from 'react';

import styled from 'lib/styled';

const Header = styled.header(({ theme }) => ({
  height: '4rem',
  width: '100%',

  backgroundColor: theme.colors.mainColor,

  color: theme.colors.whiteColor,
}));

const Main = styled.main(({ theme }) => ({
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
    <>
      <Header>Header</Header>

      <Main>{children}</Main>

      <Footer>Footer</Footer>
    </>
  );
}

export { Layout };
