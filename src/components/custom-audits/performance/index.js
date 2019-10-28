import React from 'react';
import PropTypes from 'prop-types';

import { FirstMeaningfulPaint } from './first-meaningful-paint';
import { Interactive } from './interactive';
import { ScreenshotThumbnails } from './screenshot-thumbnails';
import { UsesTextCompression } from './uses-text-compression';
import { UsesResponsiveImages } from './uses-responsive-images';
import { OffscreenImages } from './offscreen-images';

const PerformanceIndex = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-3xl">Performance</h3>
    <h4 className="font-black mt-8 text-xl tracking-wide uppercase">Metrics</h4>
    <ul>
      <FirstMeaningfulPaint lighthouse={lighthouse} />
      <Interactive lighthouse={lighthouse} />
      <ScreenshotThumbnails lighthouse={lighthouse} />
      <hr className="mt-8" />
      <h4 className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Opportunities
        </span>{' '}
        — These suggestions can help your page load faster.
      </h4>
      <UsesTextCompression lighthouse={lighthouse} />
      <UsesResponsiveImages lighthouse={lighthouse} />
      <OffscreenImages lighthouse={lighthouse} />
    </ul>
  </article>
);

PerformanceIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default PerformanceIndex;
