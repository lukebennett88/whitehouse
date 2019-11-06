import React from 'react';
import Markdown from 'markdown-to-jsx';

export const NoDocumentWrite = ({ lighthouse }) =>
  lighthouse.audits['no-document-write'].score !== 1 &&
  lighthouse.audits['no-document-write'].score !== null && (
    <li id="no-document-write">
      <dl>
        <dt>
          <Markdown>{lighthouse.audits['no-document-write'].title}</Markdown>
          <span
            className={`${
              lighthouse.audits['no-document-write'].score < 0.5
                ? `bg-red-300 text-red-900`
                : `bg-orange-300 text-orange-900`
            } font-black inline-block ml-2 px-2 rounded-full text-sm whitespace-no-wrap`}
          >
            {lighthouse.audits['no-document-write'].displayValue}
          </span>
        </dt>
        <dd>
          <details open>
            <summary>
              <Markdown>
                {lighthouse.audits['no-document-write'].description}
              </Markdown>
            </summary>
            <div className="mt-4">
              {lighthouse.audits['no-document-write'].details && (
                <div className="overflow-x-auto">
                  <table className="mt-2 w-full">
                    <thead>
                      <tr>
                        <th className="font-black px-4 py-2">
                          {
                            lighthouse.audits['no-document-write'].details
                              .headings[0].text
                          }
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lighthouse.audits['no-document-write'].details &&
                        lighthouse.audits[
                          'no-document-write'
                        ].details.items.map(item => (
                          <tr key={item.path} className="odd:bg-white">
                            <td title={item.selector}>
                              <div className="flex items-center py-2 px-4">
                                <div>{item.url}</div>
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
