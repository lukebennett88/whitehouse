import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Scores = ({ lighthouse }) => {
  // Performance
  let performanceColors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.performance.score < 0.9) {
    performanceColors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.performance.score < 0.5) {
    performanceColors = `bg-red-300 text-red-900`;
  }

  // Accessibility
  let a11yColors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.accessibility.score < 0.9) {
    a11yColors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.accessibility.score < 0.5) {
    a11yColors = `bg-red-300 text-red-900`;
  }

  // Best Practices
  let bestPracticesColors = `bg-green-300 text-green-900`;
  if (lighthouse.categories['best-practices'].score < 0.9) {
    bestPracticesColors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories['best-practices'].score < 0.5) {
    bestPracticesColors = `bg-red-300 text-red-900`;
  }

  // SEO
  let seoColors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.seo.score < 0.9) {
    seoColors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.seo.score < 0.5) {
    seoColors = `bg-red-300 text-red-900`;
  }
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="flex w-full mt-6 md:w-1/4">
        <AnchorLink
          href="#performance"
          offset="12"
          className="flex flex-col items-center justify-between flex-1 px-4 py-6 mx-2 bg-indigo-100 shadow hover:shadow-lg"
        >
          <h2 className="text-2xl font-black leading-none text-center">
            Performance
          </h2>
          <span
            className={`${performanceColors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
          >
            {parseFloat(
              Math.round(lighthouse.categories.performance.score * 100 * 100) /
                100
            ).toFixed(0)}
          </span>
        </AnchorLink>
      </div>
      <div className="flex w-full mt-6 md:w-1/4">
        <AnchorLink
          href="#accessibility"
          offset="12"
          className="flex flex-col items-center justify-between flex-1 px-4 py-6 mx-2 bg-indigo-100 shadow hover:shadow-lg"
        >
          <h2 className="text-2xl font-black leading-none text-center">
            Accessibility
          </h2>
          <span
            className={`${a11yColors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
          >
            {parseFloat(
              Math.round(
                lighthouse.categories.accessibility.score * 100 * 100
              ) / 100
            ).toFixed(0)}
          </span>
        </AnchorLink>
      </div>
      <div className="flex w-full mt-6 md:w-1/4">
        <AnchorLink
          href="#best-practices"
          offset="12"
          className="flex flex-col items-center justify-between flex-1 px-4 py-6 mx-2 bg-indigo-100 shadow hover:shadow-lg"
        >
          <h2 className="text-2xl font-black leading-none text-center">
            Best Practices
          </h2>
          <span
            className={`${bestPracticesColors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
          >
            {parseFloat(
              Math.round(
                lighthouse.categories['best-practices'].score * 100 * 100
              ) / 100
            ).toFixed(0)}
          </span>
        </AnchorLink>
      </div>
      <div className="flex w-full mt-6 md:w-1/4">
        <AnchorLink
          href="#seo"
          offset="12"
          className="flex flex-col items-center justify-between flex-1 px-4 py-6 mx-2 bg-indigo-100 shadow hover:shadow-lg"
        >
          <h2 className="text-2xl font-black leading-none text-center">SEO</h2>
          <span
            className={`${seoColors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
          >
            {parseFloat(
              Math.round(lighthouse.categories.seo.score * 100 * 100) / 100
            ).toFixed(0)}
          </span>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Scores;
