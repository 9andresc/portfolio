import App from 'next/app';
import React from 'react';
import * as Sentry from '@sentry/node';

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

    return <Component {...modifiedPageProps} />;
  }
}

export default MyApp;
