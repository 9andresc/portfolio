/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import App from 'next/app';
import React from 'react';
import 'sanitize.css';
import * as Sentry from '@sentry/node';
import { ThemeProvider } from 'styled-components';

import { Layout } from 'components/layout';
import { theme } from 'utils/theme';

Sentry.init({
  dsn: 'https://19eb35eb20454657838736fb2102b10c@sentry.io/1777837',
  enabled: process.env.NODE_ENV === 'production',
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // Workaround for https://github.com/zeit/next.js/issues/8592
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { err } = this.props as any;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <>
        <style global jsx>{`
          html,
          body {
            font-size: 16px;
            cursor: auto;
          }
        `}</style>

        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...modifiedPageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
