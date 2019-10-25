import React from 'react';
import Markdown from 'markdown-to-jsx';

const ImageAlt = ({ lighthouse }) =>
  lighthouse.audits['image-alt'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['image-alt'].title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits['image-alt'].description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default ImageAlt;
