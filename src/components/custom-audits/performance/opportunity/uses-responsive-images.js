import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const UsesResponsiveImages = ({ lighthouse }) =>
  lighthouse.audits['uses-responsive-images'].score !== 1 && (
    <li id="uses-responsive-images">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['uses-responsive-images'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['uses-responsive-images'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['uses-responsive-images'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['uses-responsive-images'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.stackPacks[0] &&
                lighthouse.stackPacks[0].descriptions &&
                lighthouse.stackPacks[0].descriptions[
                  'uses-responsive-images'
                ] && (
                  <Markdown>
                    {
                      lighthouse.stackPacks[0].descriptions[
                        'uses-responsive-images'
                      ]
                    }
                  </Markdown>
                )}
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">URL</th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Size
                      </th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Potential
                        <br /> Savings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['uses-responsive-images'].details &&
                      lighthouse.audits[
                        'uses-responsive-images'
                      ].details.items.map((item) => (
                        <tr key={item.url} className="odd:bg-white">
                          <td
                            title={item.url}
                            className="flex items-center max-w-xl py-2 truncate"
                          >
                            <img
                              src={item.url}
                              alt=""
                              className="h-12 mx-2 object-cover w-12"
                              loading="lazy"
                            />
                            {item.url}
                          </td>
                          <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                            <span className="font-mono">
                              {commaNumber(
                                parseFloat(
                                  Math.round((item.totalBytes / 1000) * 100) /
                                    100
                                ).toFixed(0)
                              )}
                            </span>{' '}
                            KB
                          </td>
                          <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                            <span className="font-mono">
                              {commaNumber(
                                parseFloat(
                                  Math.round((item.wastedBytes / 1000) * 100) /
                                    100
                                ).toFixed(0)
                              )}
                            </span>{' '}
                            KB
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
