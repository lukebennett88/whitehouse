import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const BootupTime = ({ lighthouse }) =>
  lighthouse.audits['bootup-time'].score !== 1 && (
    <li id="bootup-time">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['bootup-time'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['bootup-time'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['bootup-time'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['bootup-time'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">URL</th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Total CPU
                        <br /> Time
                      </th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Script
                        <br /> Evaluation
                      </th>
                      <th className="font-black px-4 py-2 text-right w-20">
                        Script
                        <br /> Parse
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['bootup-time'].details &&
                      lighthouse.audits['bootup-time'].details.items.map(
                        item => (
                          <tr key={item.url} className="odd:bg-white">
                            <td className="flex items-center max-w-xl py-2 px-4 truncate">
                              {item.url}
                            </td>
                            <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                              <span className="font-mono">
                                {commaNumber(
                                  parseFloat(
                                    Math.round(item.total * 100) / 100
                                  ).toFixed(0)
                                )}
                              </span>{' '}
                              KB
                            </td>
                            <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                              <span className="font-mono">
                                {commaNumber(
                                  parseFloat(
                                    Math.round(item.scripting * 100) / 100
                                  ).toFixed(0)
                                )}
                              </span>{' '}
                              KB
                            </td>
                            <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                              <span className="font-mono">
                                {commaNumber(
                                  parseFloat(
                                    Math.round(item.scriptParseCompile * 100) /
                                      100
                                  ).toFixed(0)
                                )}
                              </span>{' '}
                              KB
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
