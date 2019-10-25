import React from 'react';
import Markdown from 'markdown-to-jsx';

const LogicalTabOrder = ({ lighthouse }) =>
  lighthouse.audits['uses-long-cache-ttl'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['uses-long-cache-ttl'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['uses-long-cache-ttl'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  ));

export default LogicalTabOrder;
