import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css'; // it's a package
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
