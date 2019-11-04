import React from 'react';
import PropTypes from 'prop-types';

// // html-has-lang
// // html-lang-valid
// // valid-lang

const A11yLanguage = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-language'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-language" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Audio and video
        </span>{' '}
        — These are opportunities to provide alternative content for audio and
        video. This may improve the experience for users with hearing or vision
        impairments.
      </h4>
      <ul>{/* <AriaAllowedAttr lighthouse={lighthouse} /> */}</ul>
    </>
  );

A11yLanguage.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yLanguage;
