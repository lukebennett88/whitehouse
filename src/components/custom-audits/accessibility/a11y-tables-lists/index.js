import React from 'react';
import PropTypes from 'prop-types';

import { DefinitionList } from './definition-list';
import { DLItem } from './dlitem';
import { LayoutTable } from './layout-table';
import { List } from './list';
import { ListItem } from './listitem';
import { TDHeadersAttr } from './td-headers-attr';
import { THHasDataCells } from './th-has-data-cells';

const A11yTablesLists = ({ lighthouse }) => {
  // Get list of all tests for group
  const group = lighthouse.categories.accessibility.auditRefs.filter(
    (auditRef) => auditRef.group === 'a11y-tables-lists'
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
          <h4 id="a11y-tables-lists" className="mt-8 text-xl">
            <span className="font-black tracking-wide uppercase">
              Tables and lists
            </span>{' '}
            — These are opportunities to to improve the experience of reading
            tabular or list data using assistive technology, like a screen
            reader.
          </h4>
          <ul>
            <DefinitionList lighthouse={lighthouse} />
            <DLItem lighthouse={lighthouse} />
            <LayoutTable lighthouse={lighthouse} />
            <List lighthouse={lighthouse} />
            <ListItem lighthouse={lighthouse} />
            <TDHeadersAttr lighthouse={lighthouse} />
            <THHasDataCells lighthouse={lighthouse} />
          </ul>
        </>
      )}
    </>
  );
};

A11yTablesLists.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yTablesLists;
