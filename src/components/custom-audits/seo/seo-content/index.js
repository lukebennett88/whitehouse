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

const SEOContent = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.seo.auditRefs.filter(
    (auditRef) => auditRef.group === 'seo-content'
  );
  const auditsFromGroup = group.map((test) => test.id);

  // Check if any of the audits fail
  const audits = Object.values(lighthouse.audits);
  const matchingAudits = audits.filter((audit) =>
    auditsFromGroup.includes(audit.id)
  );

  // If tests fail, display description
  const removePassed = matchingAudits.filter((i) => i.score !== 1);
  const failedAudits = removePassed.filter((i) => i.score !== null);

  return (
    <>
      {failedAudits.length > 0 && (
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
      )}
    </>
  );
};

SEOContent.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOContent;
