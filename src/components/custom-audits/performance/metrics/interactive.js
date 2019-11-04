import React from 'react';
import Markdown from 'markdown-to-jsx';

export const Interactive = ({ lighthouse }) =>
  lighthouse.audits.interactive.score !== 1 && (
    <li id="interactive">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.interactive.title}</Markdown>
          <span
            className={`${
              lighthouse.audits.interactive.numericValue < 7300
                ? `bg-orange-300 text-orange-900`
                : `bg-red-300 text-red-900`
            } inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits.interactive.displayValue}
          </span>
        </dt>
        <dd>
          Measuring TTI is important because some sites optimise content
          visibility at the expense of interactivity. This can create a
          frustrating user experience: the site appears to be ready, but when
          the user tries to interact with it, nothing happens.
          <a href="https://web.dev/interactive">Learn more</a>.
        </dd>
      </dl>
    </li>
  );
