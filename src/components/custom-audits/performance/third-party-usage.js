import React from 'react';
import Markdown from 'markdown-to-jsx';

const ThirdPartySummary = ({ lighthouse }) =>
  lighthouse.audits['third-party-summary'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['third-party-summary'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['third-party-summary'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  );

export default ThirdPartySummary;
