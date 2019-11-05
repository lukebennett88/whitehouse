import React from 'react';
import Markdown from 'markdown-to-jsx';

export const Plugins = ({ lighthouse }) =>
  lighthouse.audits.plugins.score !== 1 &&
  lighthouse.audits.plugins.score !== null && (
    <li id="plugins">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.plugins.title}</Markdown>
          <span
            className={`${
              lighthouse.audits.plugins.score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits.plugins.displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>{lighthouse.audits.plugins.description}</Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits.plugins.details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits.plugins.details.headings.map(
                          heading => (
                            <th className="font-black px-4 py-2">
                              {heading.text}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits.plugins.details &&
                        lighthouse.audits.plugins.details.items.map(
                          (item, index) => (
                            <tr key={index} className="odd:bg-white">
                              <td title={item.href} className="py-2 px-4">
                                <div>
                                  <div>{item.href}</div>
                                </div>
                              </td>
                              <td title={item.selector} className="py-2 px-4">
                                <div>
                                  <div>{item.text}</div>
                                </div>
                              </td>
                            </tr>
                          )
                        )}
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
