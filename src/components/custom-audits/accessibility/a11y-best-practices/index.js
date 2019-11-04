import React from 'react';
import PropTypes from 'prop-types';

import { DuplicateID } from './duplicate-id';
import { MetaRefresh } from './meta-refresh';
import { MetaViewport } from './meta-viewport';

const A11yBestPractices = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-best-practices'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="opportunities" className="mt-8 text-xl">
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
  );

A11yBestPractices.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yBestPractices;
