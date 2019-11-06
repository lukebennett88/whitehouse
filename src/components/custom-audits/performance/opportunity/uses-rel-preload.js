import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const UsesRelPreload = ({ lighthouse }) =>
  lighthouse.audits['uses-rel-preload'].score !== 1 && (
    <li id="uses-rel-preload">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['uses-rel-preload'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['uses-rel-preload'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['uses-rel-preload'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['uses-rel-preload'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.stackPacks[0] &&
                lighthouse.stackPacks[0].descriptions &&
                lighthouse.stackPacks[0].descriptions['uses-rel-preload'] && (
                  <Markdown>
                    {lighthouse.stackPacks[0].descriptions['uses-rel-preload']}
                  </Markdown>
                )}
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">URL</th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Potential
                        <br /> Savings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['uses-rel-preload'].details &&
                      lighthouse.audits['uses-rel-preload'].details.items.map(
                        item => (
                          <tr key={item.url} className="odd:bg-white">
                            <td
                              title={item.url}
                              className="flex items-center max-w-xl py-2 px-4 truncate"
                            >
                              {item.url}
                            </td>
                            <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                              <span className="font-mono">
                                {commaNumber(
                                  parseFloat(
                                    Math.round(item.wastedMs * 100) / 100
                                  ).toFixed(0)
                                )}
                              </span>{' '}
                              ms
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </details>
        </dd>
      </dl>
    </li>
  );
