import React from 'react';
import PropTypes from 'prop-types';

import Audit from './audit';

const Performance = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-xl tracking-wide uppercase">Performance</h3>
    <ul>
      {Object.values(lighthouse.categories.performance.auditRefs).map(
        auditRef => (
          <Audit
            audit={lighthouse.audits[auditRef.id]}
            group={auditRef.group}
            key={auditRef.id}
          />
        )
      )}
    </ul>
  </article>
);

Performance.propTypes = {
  lighthouse: PropTypes.object,
};

export default Performance;
