import React from 'react';
import Markdown from 'markdown-to-jsx';

const UseLandmarks = ({ lighthouse }) =>
  lighthouse.audits['use-landmarks'].score !== 1 ||
  (lighthouse.audits['use-landmarks'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['use-landmarks'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['use-landmarks'].description}</Markdown>
        </dd>
      </dl>
    </li>
  ));

export default UseLandmarks;
