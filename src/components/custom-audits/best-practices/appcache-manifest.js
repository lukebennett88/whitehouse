import React from 'react';
import Markdown from 'markdown-to-jsx';

export const AppCacheManifest = ({ lighthouse }) =>
  lighthouse.audits['appcache-manifest'].score !== 1 &&
  lighthouse.audits['appcache-manifest'].score !== null && (
    <li id="appcache-manifest">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['appcache-manifest'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['appcache-manifest'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['appcache-manifest'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['appcache-manifest'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['appcache-manifest'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="font-black px-4 py-2">
                          {
                            lighthouse.audits['appcache-manifest'].details
                              .headings[0].text
                          }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['appcache-manifest'].details &&
                        lighthouse.audits[
                          'appcache-manifest'
                        ].details.items.map(item => (
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
