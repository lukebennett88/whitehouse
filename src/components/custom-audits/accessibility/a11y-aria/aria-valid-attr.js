import React from 'react';
import Markdown from 'markdown-to-jsx';

export const AriaValidAttr = ({ lighthouse }) =>
  lighthouse.audits['aria-valid-attr'].score !== 1 &&
  lighthouse.audits['aria-valid-attr'].score !== null && (
    <li id="aria-valid-attr">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['aria-valid-attr'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['aria-valid-attr'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits['aria-valid-attr'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['aria-valid-attr'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.stackPacks[0].descriptions['aria-valid-attr'] && (
                <Markdown>
                  {lighthouse.stackPacks[0].descriptions['aria-valid-attr']}
                </Markdown>
              )}
              <div className="overflow-x-auto">
                <table className="mt-2 w-full">
                  <thead>
                    <tr>
                      <th className="font-black px-4 py-2">Failing Elements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lighthouse.audits['aria-valid-attr'].details &&
                      lighthouse.audits['aria-valid-attr'].details.items.map(
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
                                    {item.node.nodeLabel}
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
