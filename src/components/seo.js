import React from 'react';
import Audit from './audit';

const SEO = ({ lighthouse }) => {
  let colors = `bg-green-300 text-green-900`;
  if (lighthouse.categories.seo.score < 0.9) {
    colors = `bg-orange-300 text-orange-900`;
  }
  if (lighthouse.categories.seo.score < 0.5) {
    colors = `bg-red-300 text-red-900`;
  }
  return (
    <article className="bg-indigo-100 my-4 px-4 py-6">
      <h3 className="font-black text-xl tracking-wide uppercase">SEO</h3>
      <span
        className={`${colors} flex font-black h-24 items-center justify-center mt-4 rounded-full text-4xl w-24`}
      >
        {parseFloat(
          Math.round(lighthouse.categories.seo.score * 100 * 100) / 100
        ).toFixed(0)}
      </span>
      <ul>
        {Object.values(lighthouse.categories.seo.auditRefs).map(auditRef => (
          <Audit audit={lighthouse.audits[auditRef.id]} key={auditRef.id} />
        ))}
      </ul>
    </article>
  );
};

export default SEO;
