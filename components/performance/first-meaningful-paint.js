import React from 'react';
import Markdown from 'markdown-to-jsx';

const FirstMeaningfulPaint = ({ lighthouse }) =>
  lighthouse.audits['first-meaningful-paint'].score !== 1 && (
    <li>
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
            } inline-block ml-2 px-2 rounded-full`}
          >
            {lighthouse.audits['first-meaningful-paint'].displayValue}
          </span>
        </dt>
        <dd>
          <Markdown>
            {lighthouse.audits['first-meaningful-paint'].description}
          </Markdown>
        </dd>
      </dl>
    </li>
  );

export default FirstMeaningfulPaint;
