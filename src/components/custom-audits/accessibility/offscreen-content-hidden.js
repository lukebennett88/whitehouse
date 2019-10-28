import React from 'react';
import Markdown from 'markdown-to-jsx';

const OffscreenContentHidden = ({ lighthouse }) =>
  lighthouse.audits['offscreen-content-hidden'].score !== 1 ||
  (lighthouse.audits['offscreen-content-hidden'].score !== null && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['offscreen-content-hidden'].title}
          </Markdown>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['offscreen-content-hidden'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  ));

export default OffscreenContentHidden;
