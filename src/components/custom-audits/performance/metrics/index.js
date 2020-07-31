import React from 'react';

import { FirstMeaningfulPaint } from './first-meaningful-paint';
import { Interactive } from './interactive';
import { ScreenshotThumbnails } from './screenshot-thumbnails';

const Metrics = ({ lighthouse }) =>
  Object.values(lighthouse.audits).some(
    (audit) => audit.details && audit.details.type === 'metrics'
  ) && (
    <>
      <h4
        id="metrics"
        className="font-black mt-8 text-xl tracking-wide uppercase"
      >
        Metrics
      </h4>
      <ul>
        <FirstMeaningfulPaint lighthouse={lighthouse} />
        <Interactive lighthouse={lighthouse} />
        <ScreenshotThumbnails lighthouse={lighthouse} />
      </ul>
    </>
  );

export default Metrics;
