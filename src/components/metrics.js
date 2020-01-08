import React from 'react';

const Metrics = ({ lighthouse }) => {
  // Time to Interactive
  let interactiveColor = `bg-green-300 text-green-900`;
  if (lighthouse.audits.interactive.score < 0.9) {
    interactiveColor = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.audits.interactive.score < 0.5) {
    interactiveColor = `bg-red-300 text-red-900`;
  }
  // First Meaningful Paint
  let firstMeaningfulPaintColor = `bg-green-300 text-green-900`;
  if (lighthouse.audits['first-meaningful-paint'].score < 0.9) {
    firstMeaningfulPaintColor = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.audits['first-meaningful-paint'].score < 0.5) {
    firstMeaningfulPaintColor = `bg-red-300 text-red-900`;
  }
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="flex w-full mt-6 md:w-1/2">
        <div
          href="#best-practices"
          offset="12"
          className="flex flex-col items-center justify-between flex-1 px-4 py-6 mx-2 bg-indigo-100 shadow hover:shadow-lg"
        >
          <h2 className="text-2xl font-black leading-none text-center">
            {lighthouse.audits.interactive.title}
          </h2>
          <span
            className={`${interactiveColor} flex items-center justify-center font-black mt-4 px-4 py-1 rounded-full text-4xl whitespace-no-wrap`}
          >
            {lighthouse.audits.interactive.displayValue}
          </span>
        </div>
      </div>
      <div className="flex w-full mt-6 md:w-1/2">
        <div
          href="#seo"
          offset="12"
          className="flex flex-col items-center justify-between flex-1 px-4 py-6 mx-2 bg-indigo-100 shadow hover:shadow-lg"
        >
          <h2 className="text-2xl font-black leading-none text-center">
            {lighthouse.audits['first-meaningful-paint'].title}
          </h2>
          <span
            className={`${firstMeaningfulPaintColor} flex items-center justify-center font-black mt-4 px-4 py-1 rounded-full text-4xl whitespace-no-wrap`}
          >
            {lighthouse.audits['first-meaningful-paint'].displayValue}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
