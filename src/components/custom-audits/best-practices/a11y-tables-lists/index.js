import React from 'react';
import PropTypes from 'prop-types';

import { DefinitionList } from './definition-list';
import { DLItem } from './dlitem';
import { LayoutTable } from './layout-table';
import { List } from './list';
import { ListItem } from './listitem';
import { TDHeadersAttr } from './td-headers-attr';
import { THHasDataCells } from './th-has-data-cells';

const A11yTablesLists = ({ lighthouse }) =>
  lighthouse.categories.accessibility.auditRefs.some(
    audit => audit.group && audit.group === 'a11y-tables-lists'
  ) && (
    <>
      <hr className="mt-8" />
      <h4 id="a11y-tables-lists" className="mt-8 text-xl">
        <span className="font-black tracking-wide uppercase">
          Tables and lists
        </span>{' '}
        — These are opportunities to to improve the experience of reading
        tabular or list data using assistive technology, like a screen reader.
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
  );

A11yTablesLists.propTypes = {
  lighthouse: PropTypes.object,
};

export default A11yTablesLists;
