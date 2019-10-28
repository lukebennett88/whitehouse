import React from 'react';
import Markdown from 'markdown-to-jsx';

const TabIndex = ({ lighthouse }) =>
  lighthouse.audits.tabindex.score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.tabindex.title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.tabindex.description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default TabIndex;
