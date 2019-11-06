import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { Viewport } from './viewport';
import { FontSize } from './font-size';
import { TapTargets } from './tap-targets';

const SEOMobile = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.seo.auditRefs.filter(
    auditRef => auditRef.group === 'seo-mobile'
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
          <h4 id="seo-mobile" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              {lighthouse.categoryGroups['seo-mobile'].title}
            </span>{' '}
            —{' '}
            <Markdown>
              {lighthouse.categoryGroups['seo-mobile'].description}
            </Markdown>
          </h4>
          <ul>
            <Viewport lighthouse={lighthouse} />
            <FontSize lighthouse={lighthouse} />
            <TapTargets lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

SEOMobile.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOMobile;
