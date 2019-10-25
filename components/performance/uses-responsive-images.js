import React from 'react';
import Markdown from 'markdown-to-jsx';

const UsesResponsiveImages = ({ lighthouse }) =>
  lighthouse.audits['uses-responsive-images'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['uses-responsive-images'].title}
          </Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['uses-responsive-images'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  );

export default UsesResponsiveImages;
