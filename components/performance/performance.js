import React from 'react';
import {
  FirstMeaningfulPaint,
  TimeToInteractive,
  ProperlySizeImages,
  MinifyCSS,
  RemoveUnusedCSS,
  EnableTextCompression,
  AvoidsEnormousNetworkPayloads,
  ThirdPartyUsage,
} from './index';

const Performance = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-xl tracking-wide uppercase">Performance</h3>
    <ul>
      <FirstMeaningfulPaint lighthouse={lighthouse} />
      <TimeToInteractive lighthouse={lighthouse} />
      <ProperlySizeImages lighthouse={lighthouse} />
      <MinifyCSS lighthouse={lighthouse} />
      <RemoveUnusedCSS lighthouse={lighthouse} />
      <EnableTextCompression lighthouse={lighthouse} />
      <AvoidsEnormousNetworkPayloads lighthouse={lighthouse} />
      <ThirdPartyUsage lighthouse={lighthouse} />
    </ul>
  </article>
);

export default Performance;
