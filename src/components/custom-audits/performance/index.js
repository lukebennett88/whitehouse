import React from 'react';
import PropTypes from 'prop-types';

// Metrics
import { FirstMeaningfulPaint } from './first-meaningful-paint';
import { Interactive } from './interactive';

// Measure
import { ScreenshotThumbnails } from './screenshot-thumbnails';

// Load Opportunities
import { RenderBlockingResources } from './render-blocking-resources';
import { UsesResponsiveImages } from './uses-responsive-images';
import { OffscreenImages } from './offscreen-images';
import { UnminifiedCSS } from './unminified-css';
import { UnminifiedJavascript } from './unminified-javascript';
import { UnusedCSSRules } from './unused-css-rules';
import { UsesOptimizedImages } from './uses-optimized-images';
import { UsesWebpImages } from './uses-webp-images';
import { UsesTextCompression } from './uses-text-compression';
import { UsesRelPreconnect } from './uses-rel-preconnect';
import { Redirects } from './redirects';
import { UsesRelPreload } from './uses-rel-preload';
import { EfficientAnimatedContent } from './efficient-animated-content';

// Diagnostics
import { TotalByteWeight } from './total-byte-weight';
import { UsesLongCacheTTL } from './uses-long-cache-ttl';
import { BootupTime } from './bootup-time';
import { MainthreadWorkBreakdown } from './mainthread-work-breakdown';
import { FontDisplay } from './font-display';
import { ThirdPartySummary } from './third-party-summary';

const PerformanceIndex = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.performance.score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.performance.score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article className="bg-indigo-100 my-4 px-4 py-6">
      <h3 className="font-black text-3xl">Performance</h3>
      <span
        className={`${colors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
      >
        {parseFloat(
          Math.round(lighthouse.categories.performance.score * 100 * 100) / 100
        ).toFixed(0)}
      </span>
      <h4 className="font-black mt-8 text-xl tracking-wide uppercase">
        Metrics
      </h4>
      <ul>
        <FirstMeaningfulPaint lighthouse={lighthouse} />
        <Interactive lighthouse={lighthouse} />
        <ScreenshotThumbnails lighthouse={lighthouse} />
      </ul>
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
          <ul>
            <RenderBlockingResources lighthouse={lighthouse} />
            <UsesResponsiveImages lighthouse={lighthouse} />
            <OffscreenImages lighthouse={lighthouse} />
            <UnminifiedCSS lighthouse={lighthouse} />
            <UnminifiedJavascript lighthouse={lighthouse} />
            <UnusedCSSRules lighthouse={lighthouse} />
            <UsesOptimizedImages lighthouse={lighthouse} />
            <UsesWebpImages lighthouse={lighthouse} />
            <UsesTextCompression lighthouse={lighthouse} />
            <UsesRelPreconnect lighthouse={lighthouse} />
            <Redirects lighthouse={lighthouse} />
            <UsesRelPreload lighthouse={lighthouse} />
            <EfficientAnimatedContent lighthouse={lighthouse} />
          </ul>
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
          <ul>
            <TotalByteWeight lighthouse={lighthouse} />
            <UsesLongCacheTTL lighthouse={lighthouse} />
            <BootupTime lighthouse={lighthouse} />
            <MainthreadWorkBreakdown lighthouse={lighthouse} />
            <FontDisplay lighthouse={lighthouse} />
            <ThirdPartySummary lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </article>
  );
};

PerformanceIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default PerformanceIndex;
