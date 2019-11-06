import React from 'react';
import PropTypes from 'prop-types';

import { AriaAllowedAttr } from './aria-allowed-attr';
import { AriaRequiredAttr } from './aria-required-attr';
import { AriaRequiredChildren } from './aria-required-children';
import { AriaRequiredParent } from './aria-required-parent';
import { AriaRoles } from './aria-roles';
import { AriaValidAttrValue } from './aria-valid-attr-value';
import { AriaValidAttr } from './aria-valid-attr';

const A11yAria = ({ lighthouse }) => {
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
          <h4 id="a11y-aria" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">ARIA</span> —
            These are opportunities to improve the usage of ARIA in your
            application which may enhance the experience for users of assistive
            technology, like a screen reader.
          </h4>
          <ul>
            <AriaAllowedAttr lighthouse={lighthouse} />
            <AriaRequiredAttr lighthouse={lighthouse} />
            <AriaRequiredChildren lighthouse={lighthouse} />
            <AriaRequiredParent lighthouse={lighthouse} />
            <AriaRoles lighthouse={lighthouse} />
            <AriaValidAttrValue lighthouse={lighthouse} />
            <AriaValidAttr lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yAria.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yAria;
