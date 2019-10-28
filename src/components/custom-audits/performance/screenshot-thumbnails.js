import React from 'react';
import Markdown from 'markdown-to-jsx';

export const ScreenshotThumbnails = ({ lighthouse }) =>
  lighthouse.audits['screenshot-thumbnails'].score !== 1 && (
    <li className="mt-4">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['screenshot-thumbnails'].title}
          </Markdown>
        </dt>
        <dd>
          {lighthouse.audits['screenshot-thumbnails'].displayValue}
          <div className="flex mt-2 -mx-2 overflow-x-auto">
            {lighthouse.audits['screenshot-thumbnails'].details.items.map(
              item => (
                <div className="px-2">
                  <img src={item.data} alt="Screenshot." />
                </div>
              )
            )}
          </div>
        </dd>
      </dl>
    </li>
  );
