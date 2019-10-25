import React from 'react';
import Markdown from 'markdown-to-jsx';

const Label = ({ lighthouse }) =>
  lighthouse.audits.label.score !== 1 ||
  (lighthouse.audits.label.score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.label.title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.label.description}</Markdown>
        </dd>
      </dl>
    </li>
  ));

export default Label;
