import React from 'react';
import Markdown from 'markdown-to-jsx';

const VisualOrderFollowsDOM = ({ lighthouse }) =>
  lighthouse.audits['visual-order-follows-dom'].score !== 1 ||
  (lighthouse.audits['visual-order-follows-dom'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['visual-order-follows-dom'].title}
          </Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['visual-order-follows-dom'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  ));

export default VisualOrderFollowsDOM;
