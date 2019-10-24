import React from 'react';
import Markdown from 'markdown-to-jsx';

import { ColorContrast } from './index';

const Performance = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-xl tracking-wide uppercase">
      Accessibility
    </h3>
    <p className="mt-4 text-lg">
      <Markdown>{lighthouse.categories.accessibility.description}</Markdown>
    </p>
    <ul>
      <ColorContrast lighthouse={lighthouse} />
    </ul>
  </article>
);

export default Performance;
