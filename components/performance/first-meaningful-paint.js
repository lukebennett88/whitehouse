import React from 'react';
import Markdown from 'markdown-to-jsx';

const FirstMeaningfulPaint = ({ lighthouse }) => (
  <li>
    <dl>
      <dt>
        <Markdown>{lighthouse.audits['first-meaningful-paint'].title}</Markdown>
      </dt>
      <dd>
        <Markdown>
          {lighthouse.audits['first-meaningful-paint'].description}
        </Markdown>
      </dd>
    </dl>
  </li>
);

export default FirstMeaningfulPaint;
