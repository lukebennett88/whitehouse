import React from 'react';

import Layout from '../components/layout';
import Meta from '../components/meta';
import Performance from '../components/performance';
import Accessibility from '../components/accessibility';
import BestPractices from '../components/best-practices';
import SEO from '../components/seo';

import lighthouse from '../data/eastlandtruss.com.au.json';

const IndexPage = () => (
  <Layout>
    <Meta title="Home" />
    <h1 className="font-black leading-none mt-12 overflow-x-auto text-4xl w-full">
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
    <BestPractices lighthouse={lighthouse} />
    <SEO lighthouse={lighthouse} />
  </Layout>
);

export default IndexPage;
