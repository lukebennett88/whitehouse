import React from 'react';
import Markdown from 'markdown-to-jsx';

export const LinkText = ({ lighthouse }) =>
  lighthouse.audits['link-text'].score !== 1 &&
  lighthouse.audits['link-text'].score !== null && (
    <li id="link-text">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['link-text'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['link-text'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['link-text'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>{lighthouse.audits['link-text'].description}</Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['link-text'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits['link-text'].details.headings.map(
                          heading => (
                            <th className="font-black px-4 py-2">
                              {heading.text}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['link-text'].details &&
                        lighthouse.audits['link-text'].details.items.map(
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
