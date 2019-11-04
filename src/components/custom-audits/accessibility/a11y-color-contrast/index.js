import React from 'react';
import PropTypes from 'prop-types';

import { ColorContrast } from './color-contrast';

const A11yColorContrast = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-color-contrast'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="opportunities" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">Contrast</span> —
        These are opportunities to improve the legibility of your content.
      </h4>
      <ul>
        <ColorContrast lighthouse={lighthouse} />
      </ul>
    </>
  );

A11yColorContrast.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yColorContrast;
