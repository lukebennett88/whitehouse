import React from 'react';
import Markdown from 'markdown-to-jsx';

export const NoVulnerableLibraries = ({ lighthouse }) =>
  lighthouse.audits['no-vulnerable-libraries'].score !== 1 &&
  lighthouse.audits['no-vulnerable-libraries'].score !== null && (
    <li id="doctype">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['no-vulnerable-libraries'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['no-vulnerable-libraries'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['no-vulnerable-libraries'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['no-vulnerable-libraries'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['no-vulnerable-libraries'].details && (
                <div className="overflow-x-auto">
                  <table className="w-full mt-2">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'no-vulnerable-libraries'
                        ].details.headings.map(heading => (
                          <th
                            key={heading.key}
                            className="px-4 py-2 font-black"
                          >
                            {heading.text}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['no-vulnerable-libraries'].details &&
                        lighthouse.audits[
                          'no-vulnerable-libraries'
                        ].details.items.map((item, index) => {
                          return (
                            <tr key={index} className="odd:bg-white">
                              <td title={item.detectedLib.url}>
                                <div className="flex items-center px-4 py-2">
                                  <a
                                    href={item.detectedLib.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    {JSON.stringify(item, null, 2)}
                                    {item.detectedLib.text}
                                  </a>
                                </div>
                              </td>
                              <td>
                                <div className="flex items-center px-4 py-2">
                                  <div>{item.vulnCount}</div>
                                </div>
                              </td>
                              <td>
                                <div className="flex items-center px-4 py-2">
                                  <div>{item.highestSeverity}</div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
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
