import React from 'react';
import Markdown from 'markdown-to-jsx';

export const FirstMeaningfulPaint = ({ lighthouse }) =>
  lighthouse.audits['first-meaningful-paint'].score !== 1 && (
    <li className="mt-4">
      <dl>
        <dt>
          <Markdown>
            {lighthouse.audits['first-meaningful-paint'].title}
          </Markdown>
          <span
            className={`${
              lighthouse.audits['first-meaningful-paint'].numericValue < 4000
                ? `bg-orange-300 text-orange-900`
                : `bg-red-300 text-red-900`
            } inline-block ml-2 px-2 rounded-full text-sm`}
          >
            {lighthouse.audits['first-meaningful-paint'].displayValue}
          </span>
        </dt>
        <dd>
          FMP measures when the primary content of a page is visible to the
          user. The raw score for FMP is the time in seconds between the user
          initiating the page load and the page rendering the primary
          above-the-fold content. FMP essentially shows the timing of the paint
          after which the biggest above-the-fold layout change happens.
          <a href="https://web.dev/first-contentful-paint">Learn More</a>.
        </dd>
      </dl>
    </li>
  );
