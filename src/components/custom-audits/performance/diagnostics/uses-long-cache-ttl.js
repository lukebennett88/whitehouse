import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const UsesLongCacheTTL = ({ lighthouse }) =>
  lighthouse.audits['uses-long-cache-ttl'].score !== 1 && (
    <li id="uses-long-cache-ttl">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['uses-long-cache-ttl'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['uses-long-cache-ttl'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits['uses-long-cache-ttl'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['uses-long-cache-ttl'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.stackPacks[0].descriptions['uses-long-cache-ttl'] && (
                <Markdown>
                  {lighthouse.stackPacks[0].descriptions['uses-long-cache-ttl']}
                </Markdown>
              )}
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">URL</th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Cache TTL
                      </th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['uses-long-cache-ttl'].details &&
                      lighthouse.audits[
                        'uses-long-cache-ttl'
                      ].details.items.map(item => (
                        <tr key={item.url} className="odd:bg-white">
                          <td
                            title={item.url}
                            className="flex items-center max-w-xl py-2 px-4 truncate"
                          >
                            {item.url}
                          </td>
                          <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                            {item.cacheLifetimeMs === 0 ? (
                              'None'
                            ) : (
                              <>
                                <span className="font-mono">
                                  {commaNumber(
                                    parseFloat(
                                      Math.round(
                                        (item.cacheLifetimeMs / 1000) * 100
                                      ) / 100
                                    ).toFixed(0)
                                  )}
                                </span>{' '}
                                ms
                              </>
                            )}
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
