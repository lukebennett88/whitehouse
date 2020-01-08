import React from 'react';

import Layout from '../components/layout';
import Meta from '../components/meta';
import Scores from '../components/scores';
import Metrics from '../components/metrics';
import Performance from '../components/custom-audits/performance';
import Accessibility from '../components/custom-audits/accessibility';
import BestPractices from '../components/custom-audits/best-practices';
import SEO from '../components/custom-audits/seo';

import eastlandtruss from '../data/omnicare.org.au.json';

const CustomAuditPage = () => {
  const [lighthouse] = React.useState(eastlandtruss);
  return (
    <Layout>
      <Meta title="Home" />
      <h1 className="w-full mt-12 overflow-x-auto text-4xl font-black leading-none">
        <span>Report for: </span>
        <br />
        <a
          href={lighthouse.finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl leading-loose text-indigo-700"
        >
          {lighthouse.finalUrl}
        </a>
      </h1>
      <Scores lighthouse={lighthouse} />
      <Metrics lighthouse={lighthouse} />
      <Performance lighthouse={lighthouse} />
      <Accessibility lighthouse={lighthouse} />
      <BestPractices lighthouse={lighthouse} />
      <SEO lighthouse={lighthouse} />
    </Layout>
  );
};

export default CustomAuditPage;
