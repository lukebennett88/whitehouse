import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { HttpStatusCode } from './http-status-code';
import { IsCrawlable } from './is-crawlable';
import { RobotsTxt } from './robots-txt';

const SEOCrawl = ({ lighthouse }) =>
  lighthouse.categories.seo.auditRefs.some(
    audit => audit.group && audit.group === 'seo-crawl'
  ) && (
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
  );

SEOCrawl.propTypes = {
  lighthouse: PropTypes.object,
};

export default SEOCrawl;
