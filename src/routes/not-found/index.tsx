import React from 'react';

import SEO from 'components/seo';

export default function NotFound(): JSX.Element {
  return (
    <>
      <SEO title="Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
}
