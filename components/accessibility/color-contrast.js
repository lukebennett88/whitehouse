import React from 'react';
import Markdown from 'markdown-to-jsx';

const ColorContrast = ({ lighthouse }) => (
  <li>
    <dl>
      <dt>
        <Markdown>{lighthouse.audits['color-contrast'].title}</Markdown>
      </dt>
      <dd>
        <Markdown>{lighthouse.audits['color-contrast'].description}</Markdown>
        <div className="bg-indigo-200 mt-4 px-4 py-6 rounded">
          <h3 className="font-black uppercase text-sm tracking-wide">
            {lighthouse.audits['color-contrast'].details.headings[0].text}
          </h3>
          {lighthouse.audits['color-contrast'].details.items.map(item => (
            <div className="bg-indigo-100 mt-4 px-2 py-4 rounded">
              <h4>
                <Markdown>{item.node.nodeLabel}</Markdown>
              </h4>
              <pre className="bg-white font-black mt-4 overflow-x-auto px-2 py-1 rounded text-indigo-800">
                <code>{item.node.snippet}</code>
              </pre>
              <p className="mt-4">
                <Markdown>{item.node.explanation}</Markdown>
              </p>
            </div>
          ))}
        </div>
      </dd>
    </dl>
  </li>
);

export default ColorContrast;
