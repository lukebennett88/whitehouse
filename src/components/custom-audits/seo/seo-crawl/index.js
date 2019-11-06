import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { HttpStatusCode } from './http-status-code';
import { IsCrawlable } from './is-crawlable';
import { RobotsTxt } from './robots-txt';

const SEOCrawl = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.seo.auditRefs.filter(
    auditRef => auditRef.group === 'seo-crawl'
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
          <h4 id="seo-crawl" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              {lighthouse.categoryGroups['seo-crawl'].title}
            </span>{' '}
            —{' '}
            <Markdown>
              {lighthouse.categoryGroups['seo-crawl'].description}
            </Markdown>
          </h4>
          <ul>
            <HttpStatusCode lighthouse={lighthouse} />
            <IsCrawlable lighthouse={lighthouse} />
            <RobotsTxt lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

SEOCrawl.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOCrawl;
