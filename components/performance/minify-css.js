import React from 'react';
import Markdown from 'markdown-to-jsx';

const MinifyCSS = ({ lighthouse }) => (
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

export default MinifyCSS;
