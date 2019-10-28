import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const UsesResponsiveImages = ({ lighthouse }) =>
  lighthouse.audits['uses-responsive-images'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['uses-responsive-images'].title}
          </Markdown>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['uses-responsive-images'].description}
              </Markdown>
            </summary>
            <table className="mt-2 overflow-x-auto w-full">
              <thead>
                <tr>
                  <th className="font-black px-4 py-2">URL</th>
                  <th className="font-black px-4 py-2 text-right">Size</th>
                  <th className="font-black px-4 py-2 text-right">
                    Potential Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {lighthouse.audits['uses-responsive-images'].details.items.map(
                  item => (
                    <tr className="odd:bg-white">
                      <td className="px-4 py-2">
                        <img
                          src={item.url}
                          alt=""
                          className="h-12 ml-2 object-cover w-12"
                        />
                        {item.url}
                      </td>
                      <td className="px-4 py-2 text-right whitespace-no-wrap">
                        {commaNumber(item.totalBytes)} kB
                      </td>
                      <td className="px-4 py-2 text-right whitespace-no-wrap">
                        {commaNumber(item.wastedBytes)} kB
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </details>
        </dd>
      </dl>
    </li>
  );
