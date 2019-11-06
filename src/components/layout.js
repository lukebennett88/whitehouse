/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div className="antialiased flex flex-col min-h-screen text-gray-800">
    <main id="main" className="flex-1 mx-auto max-w-4xl px-4 pb-6 w-full">
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
