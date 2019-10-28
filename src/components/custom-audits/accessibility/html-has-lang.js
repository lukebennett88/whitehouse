import React from 'react';
import Markdown from 'markdown-to-jsx';

const HTMLHasLang = ({ lighthouse }) =>
  lighthouse.audits['html-has-lang'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['html-has-lang'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['html-has-lang'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default HTMLHasLang;
