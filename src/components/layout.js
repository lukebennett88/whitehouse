/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="antialiased flex flex-col min-h-screen text-gray-800">
      <header className="max-w-4xl mx-auto p-4 w-full">
        <div className="-mx-2">
          <Link
            to="/"
            className="font-black px-2"
            activeClassName="text-indigo-700 underline"
          >
            All Audits
          </Link>
          <Link
            to="/custom"
            className="font-black px-2"
            activeClassName="text-indigo-700 underline"
          >
            Custom Audits
          </Link>
        </div>
      </header>
      <main id="main" className="flex-1 mx-auto max-w-4xl px-4 pb-6 w-full">
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
