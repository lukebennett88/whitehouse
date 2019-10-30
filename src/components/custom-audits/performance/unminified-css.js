import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const UnminifiedCSS = ({ lighthouse }) =>
  lighthouse.audits['unminified-css'].score !== 1 && (
    <li id="unminified-css">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['unminified-css'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['unminified-css'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits['unminified-css'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['unminified-css'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              <Markdown>
                {lighthouse.stackPacks[0].descriptions['unminified-css']}
              </Markdown>
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
                    {lighthouse.audits['unminified-css'].details.items.map(
                      item => (
                        <tr key={item.url} className="odd:bg-white">
                          <td
                            title={item.url}
                            className="flex items-center max-w-xl py-2 px-4 truncate"
                          >
                            {item.url}
                          </td>
                          <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                            {commaNumber(item.totalBytes / 1000)} KB
                          </td>
                          <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                            {commaNumber(item.wastedBytes / 1000)} KB
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
