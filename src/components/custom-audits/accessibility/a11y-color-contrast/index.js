import React from 'react';
import PropTypes from 'prop-types';

import { ColorContrast } from './color-contrast';

const A11yColorContrast = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.accessibility.auditRefs.filter(
    auditRef => auditRef.group === 'aria-allowed-attr'
  );
  const auditsFromGroup = group.map(test => test.id);

  // Check if any of the audits fail
  const audits = Object.values(lighthouse.audits);
  const matchingAudits = audits.filter(audit =>
    auditsFromGroup.includes(audit.id)
  );

  // If tests fail, display description
  const removePassed = matchingAudits.filter(i => i.score !== 1);
  const failedAudits = removePassed.filter(i => i.score !== null);
  return (
    <>
      {failedAudits.length > 0 && (
        <>
          <hr className="mt-8" />
          <h4 id="a11y-color-contrast" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">Contrast</span>{' '}
            — These are opportunities to improve the legibility of your content.
          </h4>
          <ul>
            <ColorContrast lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yColorContrast.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yColorContrast;
