/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import logo from '../images/logo-landscape.svg';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen antialiased text-gray-800">
    <header className="w-full max-w-4xl px-4 pt-6 mx-auto">
      <Link to="/" className="w-full">
        <img src={logo} alt="Phiranno Designs logo." className="w-full" />
      </Link>
    </header>
    <main id="main" className="flex-1 w-full max-w-4xl px-4 pb-6 mx-auto">
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
