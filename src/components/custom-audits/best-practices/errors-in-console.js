import React from 'react';
import Markdown from 'markdown-to-jsx';

export const ErrorsInConsole = ({ lighthouse }) =>
  lighthouse.audits['errors-in-console'].score !== 1 &&
  lighthouse.audits['errors-in-console'].score !== null && (
    <li id="doctype">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['errors-in-console'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['errors-in-console'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['errors-in-console'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['errors-in-console'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['errors-in-console'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'errors-in-console'
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
                      {lighthouse.audits['errors-in-console'].details &&
                        lighthouse.audits[
                          'errors-in-console'
                        ].details.items.map((item, index) => (
                          <tr key={index} className="odd:bg-white">
                            <td title={item.url}>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.url}</div>
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center py-2 px-4">
                                <div className="font-mono">
                                  {item.description}
                                </div>
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
