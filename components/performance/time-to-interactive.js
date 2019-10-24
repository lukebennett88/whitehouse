import React from 'react';
import Markdown from 'markdown-to-jsx';

const TimeToInteractive = ({ lighthouse }) => (
  <li>
    <dl>
      <dt>
        <Markdown>{lighthouse.audits.interactive.title}</Markdown>
      </dt>
      <dd>
        <Markdown>{lighthouse.audits.interactive.description}</Markdown>
      </dd>
    </dl>
  </li>
);

export default TimeToInteractive;
