import React from 'react';
import Markdown from 'markdown-to-jsx';

export const THHasDataCells = ({ lighthouse }) =>
  lighthouse.audits['th-has-data-cells'].score !== 1 &&
  lighthouse.audits['th-has-data-cells'].score !== null && (
    <li id="th-has-data-cells">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['th-has-data-cells'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['th-has-data-cells'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['th-has-data-cells'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['th-has-data-cells'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">Failing Elements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['th-has-data-cells'].details &&
                      lighthouse.audits['th-has-data-cells'].details.items.map(
                        item => (
                          <tr key={item.path} className="odd:bg-white">
                            <td
                              title={item.selector}
                              className="flex items-center py-2 px-4"
                            >
                              <div className="mt-2">
                                <div>{item.node.explanation}</div>
                                <div className="bg-indigo-200 my-2 p-4 rounded">
                                  <p className="font-black">
                                    {item.node.nodeaccesskeys}
                                  </p>
                                  <code className="font-black text-indigo-800 w-full">
                                    {item.node.snippet}
                                  </code>
                                </div>
                              </div>
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
