import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout';
import Performance from '../components/performance/performance';
import Accessibility from '../components/accessibility/accessibility';
import lighthouse from '../data/www.phirannodesigns.com.au.json';

function Home() {
  return (
    <Layout>
      <Head>
        <title>Whitehouse: White-Labelled Google Lighthouse reports</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/whitehouse.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <h1 className="font-black leading-none overflow-x-auto text-4xl w-full">
        <span>Report for: </span>
        <br />
        <a
          href={lighthouse.finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="leading-loose text-2xl text-indigo-700"
        >
          {lighthouse.finalUrl}
        </a>
      </h1>
      <Performance lighthouse={lighthouse} />
      <Accessibility lighthouse={lighthouse} />
    </Layout>
  );
}

export default Home;
