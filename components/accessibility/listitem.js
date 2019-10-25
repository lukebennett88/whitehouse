import React from 'react';
import Markdown from 'markdown-to-jsx';

const ListItem = ({ lighthouse }) =>
  lighthouse.audits.listitem.score !== 1 && (
    <li>
      <dl>
        <dt>
          <Markdown>{lighthouse.audits.listitem.title}</Markdown>
        </dt>
        <dd>
          <Markdown>{lighthouse.audits.listitem.description}</Markdown>
        </dd>
      </dl>
    </li>
  );

export default ListItem;
