import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { DocumentTitle } from './document-title';
import { MetaDescription } from './meta-description';
import { LinkText } from './link-text';
import { ImageAlt } from './image-alt';
import { HrefLang } from './hreflang';
import { Canonical } from './canonical';
import { Plugins } from './plugins';

const SEOContent = ({ lighthouse }) =>
  lighthouse.categories.seo.auditRefs.some(
    audit => audit.group && audit.group === 'seo-content'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="seo-content" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          {lighthouse.categoryGroups['seo-content'].title}
        </span>{' '}
        —{' '}
        <Markdown>
          {lighthouse.categoryGroups['seo-content'].description}
        </Markdown>
      </h4>
      <ul>
        <DocumentTitle lighthouse={lighthouse} />
        <MetaDescription lighthouse={lighthouse} />
        <LinkText lighthouse={lighthouse} />
        <ImageAlt lighthouse={lighthouse} />
        <HrefLang lighthouse={lighthouse} />
        <Canonical lighthouse={lighthouse} />
        <Plugins lighthouse={lighthouse} />
      </ul>
    </>
  );

SEOContent.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOContent;
