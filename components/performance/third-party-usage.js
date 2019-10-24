import React from 'react';
import Markdown from 'markdown-to-jsx';

const ThirdPartyUsage = ({ lighthouse }) => (
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

export default ThirdPartyUsage;
