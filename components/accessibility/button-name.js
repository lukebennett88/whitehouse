import React from 'react';
import Markdown from 'markdown-to-jsx';

const ButtonName = ({ lighthouse }) =>
  lighthouse.audits['button-name'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['button-name'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['button-name'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default ButtonName;
