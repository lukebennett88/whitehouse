import PropTypes from 'prop-types';

import '../css/tailwind.css';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      <main className="flex-1 max-w-4xl mx-auto p-4 md:px-8 md:py-16 w-full">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
};

export default Layout;
