import React from 'react';
import PropTypes from 'prop-types';

import A11yColorContrast from './a11y-color-contrast';
import A11yBestPractices from './a11y-best-practices';
import A11yNamesLabels from './a11y-names-labels';
import A11yNavigation from './a11y-navigation';
import A11yAria from './a11y-aria';
import A11yAudioVideo from './a11y-audio-video';
import A11yTablesLists from './a11y-tables-lists';
import A11yLanguage from './a11y-language';

const AccessibilityIndex = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.accessibility.score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.accessibility.score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article id="accessibility" className="bg-indigo-100 my-4 px-4 py-6">
      <details>
        <summary className="flex items-center">
          <span
            className={`${colors} font-black inline-block px-4 py-1 rounded-full text-sm whitespace-no-wrap`}
          >
            {parseFloat(
              Math.round(
                lighthouse.categories.accessibility.score * 100 * 100
              ) / 100
            ).toFixed(0)}
          </span>
          <h3 className="font-black ml-2 text-3xl">Accessibility</h3>
        </summary>
        <ul>
          <A11yColorContrast lighthouse={lighthouse} />
          <A11yBestPractices lighthouse={lighthouse} />
          <A11yNamesLabels lighthouse={lighthouse} />
          <A11yNavigation lighthouse={lighthouse} />
          <A11yAria lighthouse={lighthouse} />
          <A11yAudioVideo lighthouse={lighthouse} />
          <A11yTablesLists lighthouse={lighthouse} />
          <A11yLanguage lighthouse={lighthouse} />
        </ul>
      </details>
    </article>
  );
};

AccessibilityIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default AccessibilityIndex;
