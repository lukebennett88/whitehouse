import React from 'react';
import Markdown from 'markdown-to-jsx';

const AvoidsEnormousNetworkPayloads = ({ lighthouse }) => (
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

export default AvoidsEnormousNetworkPayloads;
