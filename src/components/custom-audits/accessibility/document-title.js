import React from 'react';
import Markdown from 'markdown-to-jsx';

const DocumentTitle = ({ lighthouse }) =>
  lighthouse.audits['document-title'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['document-title'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['document-title'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default DocumentTitle;
