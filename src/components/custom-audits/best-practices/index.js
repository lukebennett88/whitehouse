import React from 'react';
import PropTypes from 'prop-types';

import { AppCacheManifest } from './appcache-manifest';
import { IsOnHttps } from './is-on-https';
import { UsesHttp2 } from './uses-http2';
import { UsesPassiveEventListeners } from './uses-passive-event-listeners';
// no-document-write
// external-anchors-use-rel-noopener
// geolocation-on-start
// doctype
// no-vulnerable-libraries
// js-libraries
// notification-on-start
// deprecations
// password-inputs-can-be-pasted-into
// errors-in-console
// image-aspect-ratio

const AccessibilityIndex = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories['best-practices'].score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories['best-practices'].score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article className="bg-indigo-100 my-4 px-4 py-6">
      <h3 className="font-black text-3xl">Best Practices</h3>
      <span
        className={`${colors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
      >
        {parseFloat(
          Math.round(
            lighthouse.categories['best-practices'].score * 100 * 100
          ) / 100
        ).toFixed(0)}
      </span>
      <ul>
        <AppCacheManifest lighthouse={lighthouse} />
        <IsOnHttps lighthouse={lighthouse} />
        <UsesHttp2 lighthouse={lighthouse} />
        <UsesPassiveEventListeners lighthouse={lighthouse} />
      </ul>
    </article>
  );
};

AccessibilityIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default AccessibilityIndex;
