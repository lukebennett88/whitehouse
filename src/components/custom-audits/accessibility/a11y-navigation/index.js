import React from 'react';
import PropTypes from 'prop-types';

import { Accesskeys } from './accesskeys';
import { Bypass } from './bypass';
import { TabIndex } from './tabindex';

const A11yNavigation = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.accessibility.auditRefs.filter(
    auditRef => auditRef.group === 'a11y-navigation'
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
          <h4 id="a11y-navigation" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Navigation
            </span>{' '}
            — These are opportunities to improve keyboard navigation in your
            application.
          </h4>
          <ul>
            <Accesskeys lighthouse={lighthouse} />
            <Bypass lighthouse={lighthouse} />
            <TabIndex lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yNavigation.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yNavigation;
