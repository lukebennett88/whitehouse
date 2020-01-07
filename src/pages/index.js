import React from 'react';

import Layout from '../components/layout';
import Meta from '../components/meta';
import Scores from '../components/scores';
import Performance from '../components/custom-audits/performance';
import Accessibility from '../components/custom-audits/accessibility';
import BestPractices from '../components/custom-audits/best-practices';
import SEO from '../components/custom-audits/seo';

import eastlandtruss from '../data/eastlandtruss.com.au.json';
import feelfitpm from '../data/feelfitpm.com.json';
import hawkesconveyancing from '../data/hawkesconveyancing.com.au.json';
import phirannodesigns from '../data/phirannodesigns.com.au.json';
import photoenlargements from '../data/photoenlargements.com.au.json';
import portmacquarieplumbing from '../data/portmacquarieplumbing.com.au.json';
import omnicare from '../data/omnicare.org.au.json';

const CustomAuditPage = () => {
  const [lighthouse, setLighthouse] = React.useState(eastlandtruss);
  return (
    <Layout>
      <Meta title="Home" />
      <div className="flex flex-wrap -mx-2">
        <button
          onClick={() => setLighthouse(eastlandtruss)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          Eastland Truss
        </button>
        <button
          onClick={() => setLighthouse(feelfitpm)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          FeelFit
        </button>
        <button
          onClick={() => setLighthouse(hawkesconveyancing)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          Hawkes Conveyancing
        </button>
        <button
          onClick={() => setLighthouse(phirannodesigns)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          Phiranno Designs
        </button>
        <button
          onClick={() => setLighthouse(photoenlargements)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          Photo Enlargements
        </button>
        <button
          onClick={() => setLighthouse(portmacquarieplumbing)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          Port Plumbing
        </button>
        <button
          onClick={() => setLighthouse(omnicare)}
          type="button"
          className="px-4 py-1 mx-2 mt-6 text-xs font-black tracking-wide text-indigo-900 uppercase bg-indigo-300 rounded-full hover:shadow"
        >
          Omnicare
        </button>
      </div>
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
      <Performance lighthouse={lighthouse} />
      <Accessibility lighthouse={lighthouse} />
      <BestPractices lighthouse={lighthouse} />
      <SEO lighthouse={lighthouse} />
    </Layout>
  );
};

export default CustomAuditPage;
