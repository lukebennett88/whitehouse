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
    <article
      id="performance"
      className="bg-indigo-100 my-4 px-4 py-6 shadow hover:shadow-lg"
    >
      <details open>
        <summary>
          <div className="flex items-center">
            <span
              className={`${colors} flex font-black px-4 py-1 rounded-full text-sm whitespace-no-wrap`}
            >
              {parseFloat(
                Math.round(
                  lighthouse.categories.performance.score * 100 * 100
                ) / 100
              ).toFixed(0)}
            </span>
            <h3 className="font-black ml-2 text-3xl">Performance</h3>
          </div>
        </summary>
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
