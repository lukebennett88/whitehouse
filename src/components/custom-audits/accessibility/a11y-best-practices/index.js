import React from 'react';
import PropTypes from 'prop-types';

import { DuplicateID } from './duplicate-id';
import { MetaRefresh } from './meta-refresh';
import { MetaViewport } from './meta-viewport';

const A11yBestPractices = ({ lighthouse }) => {
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
          <h4 id="a11y-best-practices" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Best practices
            </span>{' '}
            — These items highlight common accessibility best practices.
          </h4>
          <ul>
            <DuplicateID lighthouse={lighthouse} />
            <MetaRefresh lighthouse={lighthouse} />
            <MetaViewport lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yBestPractices.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yBestPractices;
