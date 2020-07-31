import React from 'react';
import PropTypes from 'prop-types';

import { Label } from './label';
import { LinkName } from './link-name';
import { ButtonName } from './button-name';
import { DocumentTitle } from './document-title';
import { FrameTitle } from './frame-title';
import { ImageAlt } from './image-alt';
import { InputImageAlt } from './input-image-alt';
import { ObjectAlt } from './object-alt';

const A11yNamesLabels = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.accessibility.auditRefs.filter(
    (auditRef) => auditRef.group === 'a11y-names-labels'
  );
  const auditsFromGroup = group.map((test) => test.id);

  // Check if any of the audits fail
  const audits = Object.values(lighthouse.audits);
  const matchingAudits = audits.filter((audit) =>
    auditsFromGroup.includes(audit.id)
  );

  // If tests fail, display description
  const removePassed = matchingAudits.filter((i) => i.score !== 1);
  const failedAudits = removePassed.filter((i) => i.score !== null);
  return (
    <>
      {failedAudits.length > 0 && (
        <>
          <hr className="mt-8" />
          <h4 id="a11y-names-labels" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Names and labels
            </span>{' '}
            — These are opportunities to improve the semantics of the controls
            in your application. This may enhance the experience for users of
            assistive technology, like a screen reader.
          </h4>
          <ul>
            <Label lighthouse={lighthouse} />
            <LinkName lighthouse={lighthouse} />
            <ButtonName lighthouse={lighthouse} />
            <DocumentTitle lighthouse={lighthouse} />
            <FrameTitle lighthouse={lighthouse} />
            <ImageAlt lighthouse={lighthouse} />
            <InputImageAlt lighthouse={lighthouse} />
            <ObjectAlt lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yNamesLabels.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yNamesLabels;
