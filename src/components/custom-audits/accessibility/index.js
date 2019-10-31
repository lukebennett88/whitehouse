import React from 'react';
import PropTypes from 'prop-types';

// a11y-color-contrast
import { ColorContrast } from './color-contrast';

// a11y-best-practices
import { DuplicateID } from './duplicate-id';

// a11y-names-labels
import { Label } from './label';
import { LinkName } from './link-name';
import { ButtonName } from './button-name';

// a11y-navigation
import { Bypass } from './bypass';

const AccessibilityIndex = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.accessibility.score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.accessibility.score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article className="bg-indigo-100 my-4 px-4 py-6">
      <h3 className="font-black text-3xl">Accessibility</h3>
      <span
        className={`${colors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
      >
        {parseFloat(
          Math.round(lighthouse.categories.accessibility.score * 100 * 100) /
            100
        ).toFixed(0)}
      </span>
      {/* Check if there are any audits with the type of "a11y-color-contrast" and only show those audits if true */}
      {lighthouse.categories.accessibility.auditRefs.some(
        audit => audit.group && audit.group === 'a11y-color-contrast'
      ) && (
        <>
          <hr className="mt-8" />
          <h4 id="opportunities" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">Contrast</span>{' '}
            — These are opportunities to improve the legibility of your content.
          </h4>
          <ul>
            <ColorContrast lighthouse={lighthouse} />
          </ul>
        </>
      )}
      {/* Check if there are any audits with the type of "a11y-best-practices" and only show those audits if true */}
      {lighthouse.categories.accessibility.auditRefs.some(
        audit => audit.group && audit.group === 'a11y-best-practices'
      ) && (
        <>
          <hr className="mt-8" />
          <h4 id="opportunities" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Best practices
            </span>{' '}
            — These items highlight common accessibility best practices.
          </h4>
          <ul>
            <DuplicateID lighthouse={lighthouse} />
          </ul>
        </>
      )}
      {/* Check if there are any audits with the type of "a11y-names-labels" and only show those audits if true */}
      {lighthouse.categories.accessibility.auditRefs.some(
        audit => audit.group && audit.group === 'a11y-names-labels'
      ) && (
        <>
          <hr className="mt-8" />
          <h4 id="opportunities" className="mt-8 text-xl">
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
          </ul>
        </>
      )}
      {/* Check if there are any audits with the type of "a11y-navigation" and only show those audits if true */}
      {lighthouse.categories.accessibility.auditRefs.some(
        audit => audit.group && audit.group === 'a11y-navigation'
      ) && (
        <>
          <hr className="mt-8" />
          <h4 id="opportunities" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Names and labels
            </span>{' '}
            — These are opportunities to improve the semantics of the controls
            in your application. This may enhance the experience for users of
            assistive technology, like a screen reader.
          </h4>
          <ul>
            <Bypass lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </article>
  );
};

AccessibilityIndex.propTypes = {
  lighthouse: PropTypes.object,
};

export default AccessibilityIndex;
