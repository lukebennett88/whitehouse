import React from 'react';
import Markdown from 'markdown-to-jsx';
import commaNumber from 'comma-number';

export const RenderBlockingResources = ({ lighthouse }) =>
  lighthouse.audits['render-blocking-resources'].score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['render-blocking-resources'].title}
          </Markdown>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['render-blocking-resources'].description}
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
                {lighthouse.audits[
                  'render-blocking-resources'
                ].details.items.map(item => (
                  <tr className="odd:bg-white">
                    <td
                      title={item.url}
                      className="flex items-center max-w-xl py-2 px-4 truncate"
                    >
                      {item.url}
                    </td>
                    <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                      {commaNumber(item.totalBytes)} kB
                    </td>
                    <td className="px-4 py-2 text-right whitespace-no-wrap w-20">
                      {commaNumber(item.wastedMs)} ms
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        </dd>
      </dl>
    </li>
  );