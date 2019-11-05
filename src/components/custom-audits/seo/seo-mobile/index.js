import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { Viewport } from './viewport';
import { FontSize } from './font-size';
import { TapTargets } from './tap-targets';

const SEOMobile = ({ lighthouse }) =>
  lighthouse.categories.seo.auditRefs.some(
    audit => audit.group && audit.group === 'seo-mobile'
  ) && (
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
  );

SEOMobile.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOMobile;
