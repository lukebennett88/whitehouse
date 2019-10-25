import React from 'react';
import Markdown from 'markdown-to-jsx';

const DuplicateID = ({ lighthouse }) =>
  lighthouse.audits['duplicate-id'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['duplicate-id'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['duplicate-id'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default DuplicateID;
