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

const A11yNamesLabels = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-names-labels'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-names-labels" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Names and labels
        </span>{' '}
        — These are opportunities to improve the semantics of the controls in
        your application. This may enhance the experience for users of assistive
        technology, like a screen reader.
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
  );

A11yNamesLabels.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yNamesLabels;
