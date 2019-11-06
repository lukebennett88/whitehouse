import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const MainthreadWorkBreakdown = ({ lighthouse }) =>
  lighthouse.audits['mainthread-work-breakdown'].score !== 1 && (
    <li id="mainthread-work-breakdown">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['mainthread-work-breakdown'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['mainthread-work-breakdown'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['mainthread-work-breakdown'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['mainthread-work-breakdown'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">Category</th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['mainthread-work-breakdown'].details &&
                      lighthouse.audits[
                        'mainthread-work-breakdown'
                      ].details.items.map(item => (
                        <tr key={item.groupLabel} className="odd:bg-white">
                          <td className="flex items-center max-w-xl py-2 px-4 truncate">
                            {item.groupLabel}
                          </td>
                          <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                            <span className="font-mono">
                              {commaNumber(
                                parseFloat(
                                  Math.round(item.duration * 100) / 100
                                ).toFixed(0)
                              )}
                            </span>{' '}
                            ms
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </dd>
      </dl>
    </li>
  );
