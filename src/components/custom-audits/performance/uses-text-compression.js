import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const UsesTextCompression = ({ lighthouse }) =>
  lighthouse.audits['uses-text-compression'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['uses-text-compression'].title}
          </Markdown>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['uses-text-compression'].description}
              </Markdown>
            </summary>
            <table className="mt-2 overflow-x-auto w-full">
              <thead>
                <tr>
                  <th className="font-black px-4 py-2">URL</th>
                  <th className="font-black px-4 py-2 text-right w-20">Size</th>
                  <th className="font-black px-4 py-2 text-right w-20">
                    Potential
                    <br /> Savings
                  </th>
                </tr>
              </thead>
              <tbody>
                {lighthouse.audits['uses-text-compression'].details.items.map(
                  item => (
                    <tr className="odd:bg-white">
                      <td className="flex items-center max-w-xl py-2 px-4 truncate">
                        {item.url}
                      </td>
                      <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                        {commaNumber(item.totalBytes)} kB
                      </td>
                      <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
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
