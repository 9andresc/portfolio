import Head from 'next/head';
import React, { ReactElement } from 'react';

import { Intro } from './intro';
import { Tech } from './tech';

export function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>9andresc Portfolio</title>
        <meta name="Home" content="The main page of my portfolio." />
      </Head>

      <Intro />

      <Tech />
    </>
  );
}
