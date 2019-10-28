import React from 'react';
import Markdown from 'markdown-to-jsx';

const Bypass = ({ lighthouse }) =>
  lighthouse.audits.bypass.score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.bypass.title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.bypass.description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default Bypass;
