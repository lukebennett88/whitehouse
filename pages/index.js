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
      </Head>
      <h1 className="font-black leading-none text-4xl">
        <span>Report for: </span>
        <br />
        <a
          href={lighthouse.finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="leading-loose overflow-x-auto text-2xl text-indigo-700"
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
