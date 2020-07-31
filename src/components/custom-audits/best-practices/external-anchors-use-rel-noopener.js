import React from 'react';
import Markdown from 'markdown-to-jsx';

export const ExternalAnchorsUseRelNoopener = ({ lighthouse }) =>
  lighthouse.audits['external-anchors-use-rel-noopener'].score !== 1 &&
  lighthouse.audits['external-anchors-use-rel-noopener'].score !== null && (
    <li id="external-anchors-use-rel-noopener">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['external-anchors-use-rel-noopener'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['external-anchors-use-rel-noopener'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {
              lighthouse.audits['external-anchors-use-rel-noopener']
                .displayValue
            }
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {
                  lighthouse.audits['external-anchors-use-rel-noopener']
                    .description
                }
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['external-anchors-use-rel-noopener']
                .details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'external-anchors-use-rel-noopener'
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
                      {lighthouse.audits['external-anchors-use-rel-noopener']
                        .details &&
                        lighthouse.audits[
                          'external-anchors-use-rel-noopener'
                        ].details.items.map((item, index) => (
                          <tr key={index} className="odd:bg-white">
                            <td title={item.href}>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.href}</div>
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.target}</div>
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.rel}</div>
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
