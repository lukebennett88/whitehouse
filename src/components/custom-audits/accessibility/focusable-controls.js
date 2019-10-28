import React from 'react';
import Markdown from 'markdown-to-jsx';

const FocusableControls = ({ lighthouse }) =>
  lighthouse.audits['focusable-controls'].score !== 1 ||
  (lighthouse.audits['focusable-controls'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['focusable-controls'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['focusable-controls'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  ));

export default FocusableControls;
