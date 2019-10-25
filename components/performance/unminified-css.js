import React from 'react';
import Markdown from 'markdown-to-jsx';

const UnminifiedCSS = ({ lighthouse }) =>
  lighthouse.audits['unminified-css'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['unminified-css'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['unminified-css'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default UnminifiedCSS;
