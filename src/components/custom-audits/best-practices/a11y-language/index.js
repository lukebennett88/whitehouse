import React from 'react';
import PropTypes from 'prop-types';

import { HTMLHasLang } from './html-has-lang';
import { HTMLLangValid } from './html-lang-valid';
import { ValidLang } from './valid-lang';

const A11yLanguage = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-language'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-language" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Internationalization and localization
        </span>{' '}
        — These are opportunities to improve the interpretation of your content
        by users in different locales.
      </h4>
      <ul>
        <HTMLHasLang lighthouse={lighthouse} />
        <HTMLLangValid lighthouse={lighthouse} />
        <ValidLang lighthouse={lighthouse} />
      </ul>
    </>
  );

A11yLanguage.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yLanguage;
