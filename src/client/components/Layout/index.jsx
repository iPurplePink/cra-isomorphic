import React from 'react';

import Footer from './Footer';
import Header from './Header';
// import '../../css/components/Layout/styles.scss';

const Layout = props => {
  return (
    <>
      <Header {...props} />
      <main className="main-section">{props.children}</main>
      <Footer {...props} />
    </>
  );
};

export default Layout;
