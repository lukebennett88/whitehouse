import React from 'react';
import {
  FirstMeaningfulPaint,
  Interactive,
  UsesResponsiveImages,
  UnminifiedCSS,
  UnusedCSSRules,
  UsesTextCompression,
  TotalByteWeight,
  ThirdPartySummary,
} from './index';

const Performance = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-xl tracking-wide uppercase">Performance</h3>
    <ul>
      <FirstMeaningfulPaint lighthouse={lighthouse} />
      <Interactive lighthouse={lighthouse} />
      <UsesResponsiveImages lighthouse={lighthouse} />
      <UnminifiedCSS lighthouse={lighthouse} />
      <UnusedCSSRules lighthouse={lighthouse} />
      <UsesTextCompression lighthouse={lighthouse} />
      <TotalByteWeight lighthouse={lighthouse} />
      <ThirdPartySummary lighthouse={lighthouse} />
    </ul>
  </article>
);

export default Performance;
