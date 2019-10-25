import React from 'react';
import Markdown from 'markdown-to-jsx';

const FocusTraps = ({ lighthouse }) =>
  lighthouse.audits['focus-traps'].score !== 1 ||
  (lighthouse.audits['focus-traps'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['focus-traps'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['focus-traps'].description}</Markdown>
        </dd>
      </dl>
    </li>
  ));

export default FocusTraps;
