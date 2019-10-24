import React from 'react';
import Markdown from 'markdown-to-jsx';

const RemoveUnusedCSS = ({ lighthouse }) => (
  <li>
    <dl>
      <dt>
        <Markdown>{lighthouse.audits['unused-css-rules'].title}</Markdown>
      </dt>
      <dd>
        <Markdown>{lighthouse.audits['unused-css-rules'].description}</Markdown>
      </dd>
    </dl>
  </li>
);

export default RemoveUnusedCSS;
