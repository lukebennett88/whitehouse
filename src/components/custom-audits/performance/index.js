import React from 'react';
import PropTypes from 'prop-types';

import Metrics from './metrics';
import Opportunity from './opportunity';
import Diagnostics from './diagnostics';

const PerformanceIndex = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.performance.score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.performance.score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article className="bg-indigo-100 my-4 px-4 py-6">
      <details>
        <summary>
          <h3 className="font-black text-3xl">Performance</h3>
        </summary>
        <span
          className={`${colors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
        >
          {parseFloat(
            Math.round(lighthouse.categories.performance.score * 100 * 100) /
              100
          ).toFixed(0)}
        </span>
        <Metrics lighthouse={lighthouse} />
        <Opportunity lighthouse={lighthouse} />
        <Diagnostics lighthouse={lighthouse} />
      </details>
    </article>
  );
};

PerformanceIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default PerformanceIndex;
