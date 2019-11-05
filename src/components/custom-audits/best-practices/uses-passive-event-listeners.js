import React from 'react';
import Markdown from 'markdown-to-jsx';

export const UsesPassiveEventListeners = ({ lighthouse }) =>
  lighthouse.audits['uses-passive-event-listeners'].score !== 1 &&
  lighthouse.audits['uses-passive-event-listeners'].score !== null && (
    <li id="uses-passive-event-listeners">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['uses-passive-event-listeners'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['uses-passive-event-listeners'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits['uses-passive-event-listeners'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['uses-passive-event-listeners'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['uses-passive-event-listeners'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'uses-passive-event-listeners'
                        ].details.headings.map(heading => (
                          <th
                            key={heading.key}
                            className="font-black px-4 py-2"
                          >
                            {heading.text}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['uses-passive-event-listeners']
                        .details &&
                        lighthouse.audits[
                          'uses-passive-event-listeners'
                        ].details.items.map(item => (
                          <tr key={item.path} className="odd:bg-white">
                            <td title={item.url}>
                              <div className="flex items-center py-2 px-4">
                                {item.url}
                              </div>
                            </td>
                            <td title={item.selector}>
                              <div className="flex items-center py-2 px-4">
                                {item.label}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </details>
        </dd>
      </dl>
    </li>
  );
