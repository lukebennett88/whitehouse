import React from 'react';
import Markdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';

const Audit = ({ audit }) => (
  <li className="mt-4">
    <dl>
      <dt className="flex items-center font-black">
        <Markdown>{audit.title}</Markdown>
      </dt>
      <dd>
        <Markdown>{audit.description}</Markdown>
      </dd>
    </dl>
  </li>
);

Audit.propTypes = {
  audit: PropTypes.object,
};

export default Audit;
