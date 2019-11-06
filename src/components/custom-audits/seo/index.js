import React from 'react';
import PropTypes from 'prop-types';

import SEOMobile from './seo-mobile';
import SEOContent from './seo-content';
import SEOCrawl from './seo-crawl';

const SEOIndex = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.seo.score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.seo.score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article id="seo" className="bg-indigo-100 my-4 px-4 py-6">
      <details>
        <summary className="flex items-center">
          <span
            className={`${colors} font-black inline-block px-4 py-1 rounded-full text-sm whitespace-no-wrap`}
          >
            {parseFloat(
              Math.round(lighthouse.categories.seo.score * 100 * 100) / 100
            ).toFixed(0)}
          </span>
          <h3 className="font-black ml-2 text-3xl">SEO</h3>
        </summary>
        <ul>
          <SEOMobile lighthouse={lighthouse} />
          <SEOContent lighthouse={lighthouse} />
          <SEOCrawl lighthouse={lighthouse} />
        </ul>
      </details>
    </article>
  );
};

SEOIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOIndex;
