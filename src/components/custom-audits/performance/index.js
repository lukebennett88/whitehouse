import React from 'react';
import PropTypes from 'prop-types';

import { FirstMeaningfulPaint } from './first-meaningful-paint';
import { Interactive } from './interactive';
import { ScreenshotThumbnails } from './screenshot-thumbnails';
import { UsesTextCompression } from './uses-text-compression';
import { UsesResponsiveImages } from './uses-responsive-images';
import { OffscreenImages } from './offscreen-images';
import { RenderBlockingResources } from './render-blocking-resources';
import { UsesWebpImages } from './uses-webp-images';
import { UnusedCSSRules } from './unused-css-rules';
import { UnminifiedJavascript } from './unminified-javascript';
import { UnminifiedCSS } from './unminified-css';
import { UsesRelPreconnect } from './uses-rel-preconnect';
import { UsesLongCacheTTL } from './uses-long-cache-ttl';
import { FontDisplay } from './font-display';

const PerformanceIndex = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-3xl">Performance</h3>
    <h4 className="font-black mt-8 text-xl tracking-wide uppercase">Metrics</h4>
    <ul>
      <FirstMeaningfulPaint lighthouse={lighthouse} />
      <Interactive lighthouse={lighthouse} />
      <ScreenshotThumbnails lighthouse={lighthouse} />
      {/* Check if there are any audits with the type of opportunity and only show those audits if true */}
      {Object.values(lighthouse.audits).some(
        audit => audit.details && audit.details.type === 'opportunity'
      ) && (
        <>
          <hr className="mt-8" />
          <h4 id="opportunities" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Opportunities
            </span>{' '}
            — These suggestions can help your page load faster.
          </h4>
          <UsesTextCompression lighthouse={lighthouse} />
          <UsesResponsiveImages lighthouse={lighthouse} />
          <OffscreenImages lighthouse={lighthouse} />
          <RenderBlockingResources lighthouse={lighthouse} />
          <UsesWebpImages lighthouse={lighthouse} />
          <UnusedCSSRules lighthouse={lighthouse} />
          <UnminifiedJavascript lighthouse={lighthouse} />
          <UnminifiedCSS lighthouse={lighthouse} />
          <UsesRelPreconnect lighthouse={lighthouse} />
        </>
      )}
      {/* Check if there are any audits with the type of opportunity and only show those audits if true */}
      {lighthouse.categories.performance.auditRefs.some(
        audit => audit.group && audit.group === 'diagnostics'
      ) && (
        <>
          <hr className="mt-8" />
          <h4 id="opportunities" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Diagnostics
            </span>{' '}
            — More information about the performance of your website.
          </h4>
          <UsesLongCacheTTL lighthouse={lighthouse} />
          <FontDisplay lighthouse={lighthouse} />
        </>
      )}
    </ul>
  </article>
);

PerformanceIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default PerformanceIndex;
