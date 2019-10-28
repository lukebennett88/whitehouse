import React from 'react';
import Markdown from 'markdown-to-jsx';

const InteractiveElementAffordance = ({ lighthouse }) =>
  lighthouse.audits['interactive-element-affordance'].score !== 1 ||
  (lighthouse.audits['interactive-element-affordance'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['interactive-element-affordance'].title}
          </Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['interactive-element-affordance'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  ));

export default InteractiveElementAffordance;
