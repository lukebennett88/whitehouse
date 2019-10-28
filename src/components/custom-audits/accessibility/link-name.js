import React from 'react';
import Markdown from 'markdown-to-jsx';

const LinkName = ({ lighthouse }) =>
  lighthouse.audits['link-name'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['link-name'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['link-name'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default LinkName;
