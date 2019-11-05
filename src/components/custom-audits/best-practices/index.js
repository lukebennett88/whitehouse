import React from 'react';
import PropTypes from 'prop-types';

import { AppCacheManifest } from './appcache-manifest';
import { IsOnHttps } from './is-on-https';
import { UsesHttp2 } from './uses-http2';
import { UsesPassiveEventListeners } from './uses-passive-event-listeners';
import { NoDocumentWrite } from './no-document-write';
import { ExternalAnchorsUseRelNoopener } from './external-anchors-use-rel-noopener';
import { GeolocationOnStart } from './geolocation-on-start';
import { Doctype } from './doctype';
import { NoVulnerableLibraries } from './no-vulnerable-libraries';
import { JSLibraries } from './js-libraries';
import { NotificationOnStart } from './notification-on-start';
import { Deprecations } from './deprecations';
import { PasswordInputsCanBePastedInto } from './password-inputs-can-be-pasted-into';
import { ErrorsInConsole } from './errors-in-console';
import { ImageAspectRatio } from './image-aspect-ratio';

const BestPracticesIndex = ({ lighthouse }) => {
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
        <NoDocumentWrite lighthouse={lighthouse} />
        <ExternalAnchorsUseRelNoopener lighthouse={lighthouse} />
        <GeolocationOnStart lighthouse={lighthouse} />
        <Doctype lighthouse={lighthouse} />
        <NoVulnerableLibraries lighthouse={lighthouse} />
        <JSLibraries lighthouse={lighthouse} />
        <NotificationOnStart lighthouse={lighthouse} />
        <Deprecations lighthouse={lighthouse} />
        <PasswordInputsCanBePastedInto lighthouse={lighthouse} />
        <ErrorsInConsole lighthouse={lighthouse} />
        <ImageAspectRatio lighthouse={lighthouse} />
      </ul>
    </article>
  );
};

BestPracticesIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default BestPracticesIndex;
