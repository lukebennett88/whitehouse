import React from 'react';
import PropTypes from 'prop-types';

// // accesskeys
import { Bypass } from './bypass';
// // tabindex

const A11yNavigation = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-navigation'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-navigation" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">Navigation</span> —
        These are opportunities to improve keyboard navigation in your
        application.
      </h4>
      <ul>
        <Bypass lighthouse={lighthouse} />
      </ul>
    </>
  );

A11yNavigation.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yNavigation;
