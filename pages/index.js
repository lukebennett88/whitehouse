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
        {/* {lighthouse.audits['redirects-http'].score === 0 && ( */}
        <dl>
          <dt>{lighthouse.audits['redirects-http'].title}</dt>
          <dd>
            <Markdown>
              {lighthouse.audits['redirects-http'].description}
            </Markdown>
          </dd>
        </dl>
        {/* )} */}
        {/* {lighthouse.audits['viewport'].score === 0 && ( */}
        <dl>
          <dt>{lighthouse.audits.viewport.title}</dt>
          <dd>
            <Markdown>{lighthouse.audits.viewport.description}</Markdown>
          </dd>
        </dl>
        {/* )} */}
      </div>
    </Layout>
  );
}

export default Home;
