import React from 'react';
import Markdown from 'markdown-to-jsx';

export const ImageAspectRatio = ({ lighthouse }) =>
  lighthouse.audits['image-aspect-ratio'].score !== 1 &&
  lighthouse.audits['image-aspect-ratio'].score !== null && (
    <li id="doctype">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['image-aspect-ratio'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['image-aspect-ratio'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['image-aspect-ratio'].displayValue}
          </span>
        </dt>
        <dd>
          <details>
            <summary>
              <Markdown>
                {lighthouse.audits['image-aspect-ratio'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['image-aspect-ratio'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        {lighthouse.audits[
                          'image-aspect-ratio'
                        ].details.headings.map(heading => (
                          <th
                            key={heading.key}
                            className="font-black px-4 py-2"
                          >
                            {heading.text}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['image-aspect-ratio'].details &&
                        lighthouse.audits[
                          'image-aspect-ratio'
                        ].details.items.map((item, index) => (
                          <tr key={index} className="odd:bg-white">
                            <td title={item.url}>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.url}</div>
                              </div>
                            </td>
                            <td>
                              <div className="flex items-center py-2 px-4">
                                <div className="font-mono">
                                  {item.description}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
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
