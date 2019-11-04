import React from 'react';

import { TotalByteWeight } from './total-byte-weight';
import { UsesLongCacheTTL } from './uses-long-cache-ttl';
import { BootupTime } from './bootup-time';
import { MainthreadWorkBreakdown } from './mainthread-work-breakdown';
import { FontDisplay } from './font-display';
import { ThirdPartySummary } from './third-party-summary';

const Diagnostics = ({ lighthouse }) =>
  lighthouse.categories.performance.auditRefs.some(
    audit => audit.group && audit.group === 'diagnostics'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="diagnostics" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">Diagnostics</span>{' '}
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
  );

export default Diagnostics;
