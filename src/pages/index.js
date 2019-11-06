import React from 'react';

import Layout from '../components/layout';
import Meta from '../components/meta';
import Performance from '../components/custom-audits/performance';
import Accessibility from '../components/custom-audits/accessibility';
import BestPractices from '../components/custom-audits/best-practices';
import SEO from '../components/custom-audits/seo';

import eastlandtruss from '../data/eastlandtruss.com.au.json';
import feelfitpm from '../data/feelfitpm.com.json';
import hawkesconveyancing from '../data/hawkesconveyancing.com.au.json';
import phirannodesigns from '../data/phirannodesigns.com.au.json';
import portmacquarieplumbing from '../data/portmacquarieplumbing.com.au.json';

const CustomAuditPage = () => {
  const [lighthouse, setLighthouse] = React.useState(eastlandtruss);
  return (
    <Layout>
      <Meta title="Home" />
      <div className="mt-6 -mx-2">
        <button
          onClick={() => setLighthouse(eastlandtruss)}
          type="button"
          className="bg-indigo-300 font-black px-4 py-1 mx-2 rounded-full text-indigo-900 text-xs tracking-wide uppercase hover:shadow"
        >
          Eastland Truss
        </button>
        <button
          onClick={() => setLighthouse(feelfitpm)}
          type="button"
          className="bg-indigo-300 font-black px-4 py-1 mx-2 rounded-full text-indigo-900 text-xs tracking-wide uppercase hover:shadow"
        >
          FeelFit
        </button>
        <button
          onClick={() => setLighthouse(hawkesconveyancing)}
          type="button"
          className="bg-indigo-300 font-black px-4 py-1 mx-2 rounded-full text-indigo-900 text-xs tracking-wide uppercase hover:shadow"
        >
          Hawkes Conveyancing
        </button>
        <button
          onClick={() => setLighthouse(phirannodesigns)}
          type="button"
          className="bg-indigo-300 font-black px-4 py-1 mx-2 rounded-full text-indigo-900 text-xs tracking-wide uppercase hover:shadow"
        >
          Phiranno Designs
        </button>
        <button
          onClick={() => setLighthouse(portmacquarieplumbing)}
          type="button"
          className="bg-indigo-300 font-black px-4 py-1 mx-2 rounded-full text-indigo-900 text-xs tracking-wide uppercase hover:shadow"
        >
          Port Plumbing
        </button>
      </div>
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
};

export default CustomAuditPage;
