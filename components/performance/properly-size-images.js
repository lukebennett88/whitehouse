import React from 'react';
import Markdown from 'markdown-to-jsx';

const ProperlySizeImages = ({ lighthouse }) => (
  <li>
    <dl>
      <dt>
        <Markdown>{lighthouse.audits['uses-responsive-images'].title}</Markdown>
      </dt>
      <dd>
        <Markdown>
          {lighthouse.audits['uses-responsive-images'].description}
        </Markdown>
      </dd>
    </dl>
  </li>
);

export default ProperlySizeImages;
