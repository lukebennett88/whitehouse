import React from 'react';
import Markdown from 'markdown-to-jsx';

const LinkName = ({ lighthouse }) =>
  lighthouse.audits.list.score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.list.title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.list.description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default LinkName;
