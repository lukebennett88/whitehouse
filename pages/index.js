import React from 'react';
import Markdown from 'markdown-to-jsx';
import Head from 'next/head';

import Layout from '../components/layout';
import lighthouse from '../data/www.phirannodesigns.com.au.json';

function Home() {
  return (
    <Layout>
      <Head>
        <title>Whitehouse: White-Labelled Google Lighthouse reports</title>
      </Head>
      <h1 className="font-black leading-none text-4xl">
        <span className="block">Report for: </span>
        <a
          href={lighthouse.finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block leading-loose overflow-x-auto text-2xl text-indigo-700"
        >
          {lighthouse.finalUrl}
        </a>
      </h1>
      {Object.values(lighthouse.categories).map(data => (
        <div key={data.id} className="w-full">
          <h2 className="font-bold mt-8 px-4 text-2xl">
            <Markdown>{data.title}</Markdown>
          </h2>
          {Object.values(lighthouse.categories).map(category => (
            <div className="bg-indigo-100 my-4 p-4">
              <h3 className="font-bold text-xl">{category.title}</h3>
              {category.description && (
                <p className="mt-2">
                  <Markdown>{category.description}</Markdown>
                </p>
              )}
              {category.manualDescription && (
                <p className="mt-2">
                  <Markdown>{category.manualDescription}</Markdown>
                </p>
              )}
              <ul className="list-disc ml-5 mt-2">
                {category.auditRefs.map(audit => (
                  <li>{audit.id}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  );
}

export default Home;
