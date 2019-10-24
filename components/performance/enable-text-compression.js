import React from 'react';
import Markdown from 'markdown-to-jsx';

const EnableTextCompression = ({ lighthouse }) => (
  <li>
    <dl>
      <dt>
        <Markdown>{lighthouse.audits['uses-text-compression'].title}</Markdown>
      </dt>
      <dd>
        <Markdown>
          {lighthouse.audits['uses-text-compression'].description}
        </Markdown>
      </dd>
    </dl>
  </li>
);

export default EnableTextCompression;
