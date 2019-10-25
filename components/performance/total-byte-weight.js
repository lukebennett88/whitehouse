import React from 'react';
import Markdown from 'markdown-to-jsx';

const TotalByteWeight = ({ lighthouse }) =>
  lighthouse.audits['total-byte-weight'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['total-byte-weight'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['total-byte-weight'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  );

export default TotalByteWeight;
