import React from 'react';
import Markdown from 'markdown-to-jsx';

const MetaViewport = ({ lighthouse }) =>
  lighthouse.audits['meta-viewport'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['meta-viewport'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['meta-viewport'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default MetaViewport;
