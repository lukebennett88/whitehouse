import React from 'react';
import Markdown from 'markdown-to-jsx';

const UnusedCSSRules = ({ lighthouse }) =>
  lighthouse.audits['unused-css-rules'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['unused-css-rules'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['unused-css-rules'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  );

export default UnusedCSSRules;
