import React from 'react';
import Markdown from 'markdown-to-jsx';

export const TapTargets = ({ lighthouse }) =>
  lighthouse.audits['tap-targets'].score !== 1 &&
  lighthouse.audits['tap-targets'].score !== null && (
    <li id="tap-targets">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['tap-targets'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['tap-targets'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['tap-targets'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['tap-targets'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['tap-targets'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits['tap-targets'].details.headings.map(
                          (heading, index) => (
                            <th key={index} className="font-black px-4 py-2">
                              {heading.text}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['tap-targets'].details &&
                        lighthouse.audits['tap-targets'].details.items.map(
                          (item, index) => (
                            <tr key={index} className="odd:bg-white">
                              <td
                                title={item.tapTarget.selector}
                                className="py-2 px-4"
                              >
                                <div className="font-black">
                                  {item.tapTarget.nodeLabel}
                                </div>
                                <div className="font-black font-mono text-indigo-800">
                                  {item.tapTarget.snippet}
                                </div>
                              </td>
                              <td
                                title={item.tapTarget.selector}
                                className="py-2 px-4"
                              >
                                {item.size}
                              </td>
                              <td
                                title={item.overlappingTarget.selector}
                                className="py-2 px-4"
                              >
                                <div className="font-black">
                                  {item.overlappingTarget.nodeLabel}
                                </div>
                                <div className="font-black font-mono text-indigo-800">
                                  {item.overlappingTarget.snippet}
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
