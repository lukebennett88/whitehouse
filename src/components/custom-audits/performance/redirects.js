import React from 'react';
import Markdown from 'markdown-to-jsx';

export const Redirects = ({ lighthouse }) =>
  lighthouse.audits.redirects.score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.redirects.title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.redirects.description}</Markdown>
        </dd>
      </dl>
    </li>
  );
