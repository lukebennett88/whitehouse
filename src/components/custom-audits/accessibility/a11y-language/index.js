import React from 'react';
import PropTypes from 'prop-types';

import { HTMLHasLang } from './html-has-lang';
import { HTMLLangValid } from './html-lang-valid';
import { ValidLang } from './valid-lang';

const A11yLanguage = ({ lighthouse }) => {
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
          <h4 id="a11y-language" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Internationalization and localization
            </span>{' '}
            — These are opportunities to improve the interpretation of your
            content by users in different locales.
          </h4>
          <ul>
            <HTMLHasLang lighthouse={lighthouse} />
            <HTMLLangValid lighthouse={lighthouse} />
            <ValidLang lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yLanguage.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yLanguage;
