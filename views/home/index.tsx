import Head from 'next/head';
import React from 'react';

import { Intro } from './intro';

export function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Intro />
    </>
  );
}
