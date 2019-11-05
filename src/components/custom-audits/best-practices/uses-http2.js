import React from 'react';
import Markdown from 'markdown-to-jsx';

export const UsesHttp2 = ({ lighthouse }) =>
  lighthouse.audits['uses-http2'].score !== 1 &&
  lighthouse.audits['uses-http2'].score !== null && (
    <li id="uses-http2">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['uses-http2'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['uses-http2'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits['uses-http2'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>{lighthouse.audits['uses-http2'].description}</Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['uses-http2'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="font-black px-4 py-2">
                          {
                            lighthouse.audits['uses-http2'].details.headings[0]
                              .text
                          }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['uses-http2'].details &&
                        lighthouse.audits['uses-http2'].details.items.map(
                          item => (
                            <tr key={item.path} className="odd:bg-white">
                              <td title={item.selector}>
                                <div className="flex items-center py-2 px-4">
                                  <div>{item.url}</div>
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
