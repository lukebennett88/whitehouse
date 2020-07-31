import React from 'react';
import Markdown from 'markdown-to-jsx';

export const MetaDescription = ({ lighthouse }) =>
  lighthouse.audits['meta-description'].score !== 1 &&
  lighthouse.audits['meta-description'].score !== null && (
    <li id="meta-description">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['meta-description'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['meta-description'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['meta-description'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['meta-description'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['meta-description'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="font-black px-4 py-2">
                          {
                            lighthouse.audits['meta-description'].details
                              .headings[0].text
                          }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['meta-description'].details &&
                        lighthouse.audits['meta-description'].details.items.map(
                          (item) => (
                            <tr key={item.path} className="odd:bg-white">
                              <td
                                title={item.selector}
                                className="flex items-center py-2 px-4"
                              >
                                <div className="mt-2">
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
