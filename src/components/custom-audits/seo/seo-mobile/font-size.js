import React from 'react';
import Markdown from 'markdown-to-jsx';

export const FontSize = ({ lighthouse }) =>
  lighthouse.audits['font-size'].score !== 1 &&
  lighthouse.audits['font-size'].score !== null && (
    <li id="font-size">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['font-size'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['font-size'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['font-size'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>{lighthouse.audits['font-size'].description}</Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.stackPacks[0].descriptions['font-size'] && (
                <Markdown>
                  {lighthouse.stackPacks[0].descriptions['font-size']}
                </Markdown>
              )}
              {lighthouse.audits['font-size'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits['font-size'].details.headings.map(
                          heading => (
                            <th className="font-black px-4 py-2">
                              {heading.text}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['font-size'].details &&
                        lighthouse.audits['font-size'].details.items.map(
                          item => (
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
