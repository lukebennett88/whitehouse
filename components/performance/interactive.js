import React from 'react';
import Markdown from 'markdown-to-jsx';

const Interactive = ({ lighthouse }) =>
  lighthouse.audits.interactive.score !== 1 && (
    <li>
      <dl>
        <dt className="flex items-center">
          <Markdown>{lighthouse.audits.interactive.title}</Markdown>
          <span
            className={`${
              lighthouse.audits.interactive.numericValue < 7300
                ? `bg-orange-300 text-orange-900`
                : `bg-red-300 text-red-900`
            } inline-block ml-2 px-2 rounded-full`}
          >
            {lighthouse.audits.interactive.displayValue}
          </span>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.interactive.description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default Interactive;
