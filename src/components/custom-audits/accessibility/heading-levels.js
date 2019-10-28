import React from 'react';
import Markdown from 'markdown-to-jsx';

const HeadingLevels = ({ lighthouse }) =>
  lighthouse.audits['heading-levels'].score !== 1 ||
  (lighthouse.audits['heading-levels'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['heading-levels'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['heading-levels'].description}</Markdown>
        </dd>
      </dl>
    </li>
  ));

export default HeadingLevels;
