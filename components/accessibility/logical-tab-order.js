import React from 'react';
import Markdown from 'markdown-to-jsx';

const LogicalTabOrder = ({ lighthouse }) =>
  lighthouse.audits['logical-tab-order'].score !== 1 ||
  (lighthouse.audits['logical-tab-order'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['logical-tab-order'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['logical-tab-order'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  ));

export default LogicalTabOrder;
