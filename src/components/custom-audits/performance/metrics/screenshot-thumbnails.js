import React from 'react';
import Markdown from 'markdown-to-jsx';

export const ScreenshotThumbnails = ({ lighthouse }) => (
  <li id="screenshot-thumbnails">
    <dl>
      <dt>
        <Markdown>{lighthouse.audits['screenshot-thumbnails'].title}</Markdown>
      </dt>
      <dd>
        {lighthouse.audits['screenshot-thumbnails'].displayValue}
        <div className="flex mt-2 -mx-2 overflow-x-auto">
          {lighthouse.audits['screenshot-thumbnails'].details &&
            lighthouse.audits['screenshot-thumbnails'].details.items.map(
              (item) => (
                <div key={item.timestamp} className="px-2">
                  <img src={item.data} alt="Screenshot." loading="lazy" />
                </div>
              )
            )}
        </div>
      </dd>
    </dl>
  </li>
);
