import Layout from '../components/layout';

import lighthouse from '../static/www.phirannodesigns.com.au.json';

function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <dl>
          <dt>URL</dt>
          <dd>{lighthouse.finalUrl}</dd>
        </dl>
      </div>
    </Layout>
  );
}

export default Home;
