import React from 'react';
import Markdown from 'markdown-to-jsx';

export const UsesPassiveEventListeners = ({ lighthouse }) =>
  lighthouse.audits['no-vulnerable-libraries'].score !== 1 &&
  lighthouse.audits['no-vulnerable-libraries'].score !== null && (
    <li id="no-vulnerable-libraries">
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
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'no-vulnerable-libraries'
                        ].details.headings.map(heading => (
                          <th
                            key={heading.text}
                            className="font-black px-4 py-2"
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
                        ].details.items.map((item, index) => (
                          <tr key={index} className="odd:bg-white">
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
