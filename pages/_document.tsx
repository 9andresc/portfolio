import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="9andresc Portfolio"
            content="This is my portfolio web page, find my resume and personal info here."
          />
          <link href="/favicon.png" rel="shortcut icon" type="image/png" />
          <link rel="stylesheet" type="text/css" href="/fonts.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
