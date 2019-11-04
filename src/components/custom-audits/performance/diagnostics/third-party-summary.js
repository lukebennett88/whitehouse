import React from 'react';
import Markdown from 'markdown-to-jsx';

export const ThirdPartySummary = ({ lighthouse }) =>
  lighthouse.audits['third-party-summary'].score !== 1 && (
    <li id="third-party-summary">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['third-party-summary'].title}</Markdown>
        </dt>
        <dd>
          {lighthouse.audits['third-party-summary'].displayValue}
          <div className="flex mt-2 -mx-2 overflow-x-auto">
            {lighthouse.audits['third-party-summary'].details &&
              lighthouse.audits['third-party-summary'].details.items.map(
                item => (
                  <div key={item.timestamp} className="px-2">
                    <img src={item.data} alt="Screenshot." loading="lazy" />
                  </div>
                )
              )}
          </div>
        </dd>
      </dl>
    </li>
  );
