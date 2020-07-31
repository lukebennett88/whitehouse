import React from 'react';
import Markdown from 'markdown-to-jsx';

export const PasswordInputsCanBePastedInto = ({ lighthouse }) =>
  lighthouse.audits['password-inputs-can-be-pasted-into'].score !== 1 &&
  lighthouse.audits['password-inputs-can-be-pasted-into'].score !== null && (
    <li id="doctype">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['password-inputs-can-be-pasted-into'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['password-inputs-can-be-pasted-into'].score <
              0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {
              lighthouse.audits['password-inputs-can-be-pasted-into']
                .displayValue
            }
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {
                  lighthouse.audits['password-inputs-can-be-pasted-into']
                    .description
                }
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['password-inputs-can-be-pasted-into']
                .details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'password-inputs-can-be-pasted-into'
                        ].details.headings.map((heading) => (
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
                      {lighthouse.audits['password-inputs-can-be-pasted-into']
                        .details &&
                        lighthouse.audits[
                          'password-inputs-can-be-pasted-into'
                        ].details.items.map((item, index) => (
                          <tr key={index} className="odd:bg-white">
                            <td title={item.href}>
                              <div className="flex items-center py-2 px-4">
                                <a
                                  href={item.detectedLib.url}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  {item.detectedLib.text}
                                </a>
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.vulnCount}</div>
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.highestSeverity}</div>
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
