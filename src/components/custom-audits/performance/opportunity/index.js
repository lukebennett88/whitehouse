import React from 'react';

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

const Opportunity = ({ lighthouse }) =>
  Object.values(lighthouse.audits).some(
    (audit) => audit.details && audit.details.type === 'opportunity'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="opportunity" className="mt-8 text-xl">
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
  );

export default Opportunity;
