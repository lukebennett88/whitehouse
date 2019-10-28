import React from 'react';
import Audit from './audit';

const Accessibility = ({ lighthouse }) => (
  <article className="bg-indigo-100 my-4 px-4 py-6">
    <h3 className="font-black text-xl tracking-wide uppercase">
      Accessibility
    </h3>
    <ul>
      {Object.values(lighthouse.categories.accessibility.auditRefs).map(
        auditRef => (
          <Audit audit={lighthouse.audits[auditRef.id]} key={auditRef.id} />
        )
      )}
    </ul>
  </article>
);

export default Accessibility;
