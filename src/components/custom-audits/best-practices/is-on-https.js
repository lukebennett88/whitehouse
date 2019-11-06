import React from 'react';
import Markdown from 'markdown-to-jsx';

export const IsOnHttps = ({ lighthouse }) =>
  lighthouse.audits['is-on-https'].score !== 1 &&
  lighthouse.audits['is-on-https'].score !== null && (
    <li id="is-on-https">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['is-on-https'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['is-on-https'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['is-on-https'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['is-on-https'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['is-on-https'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="font-black px-4 py-2">
                          {
                            lighthouse.audits['is-on-https'].details.headings[0]
                              .text
                          }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['is-on-https'].details &&
                        lighthouse.audits['is-on-https'].details.items.map(
                          (item, index) => (
                            <tr key={index} className="odd:bg-white">
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
