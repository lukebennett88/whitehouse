import React from 'react';
import PropTypes from 'prop-types';

// // definition-list
// // dlitem
// // layout-table
// // list
// // listitem
// // td-headers-attr
// // th-has-data-cells

const A11yTablesLists = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-tables-lists'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-tables-lists" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Audio and video
        </span>{' '}
        — These are opportunities to provide alternative content for audio and
        video. This may improve the experience for users with hearing or vision
        impairments.
      </h4>
      <ul>{/* <AriaAllowedAttr lighthouse={lighthouse} /> */}</ul>
    </>
  );

A11yTablesLists.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yTablesLists;
