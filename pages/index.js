import React from 'react';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/layout';
import lighthouse from '../data/www.phirannodesigns.com.au.json';

function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-black leading-none text-6xl text-center">
          <span className="block">Report for: </span>
          <span className="block leading-loose text-2xl">
            {lighthouse.finalUrl}
          </span>
        </h2>
        <dl>
          {Object.values(lighthouse.audits).map(data => {
            console.log(data);
            return (
              <React.Fragment key={data.index}>
                <dt className="block font-bold mt-4">{data.title}</dt>
                <dd>
                  <Markdown>{data.description}</Markdown>
                </dd>
              </React.Fragment>
            );
          })}
        </dl>
      </div>
    </Layout>
  );
}

export default Home;
