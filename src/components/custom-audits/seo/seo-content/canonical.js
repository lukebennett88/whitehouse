import React from 'react';
import Markdown from 'markdown-to-jsx';

export const Canonical = ({ lighthouse }) =>
  lighthouse.audits.canonical.score !== 1 &&
  lighthouse.audits.canonical.score !== null && (
    <li id="hreflang">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.canonical.title}</Markdown>
          <span
            className={`${
              lighthouse.audits.canonical.score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits.canonical.displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>{lighthouse.audits.canonical.description}</Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits.canonical.details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits.canonical.details.headings.map(
                          heading => (
                            <th className="font-black px-4 py-2">
                              {heading.text}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits.canonical.details &&
                        lighthouse.audits.canonical.details.items.map(
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
