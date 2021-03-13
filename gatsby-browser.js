// specific gatsby file that will allow us to hook into different apis of gatsby
// we're creating this so we dont have to manually wrap our pages in <Layout></Layout>
// we can hook into the wrap page element hook and gatsby will automatically do that for us
// when gatsby fires up the browser it will check this file

import React from 'react';
import Layout from './src/components/Layout';

// creating our own little plugin to wrap pages - can look at it in gatsby docs
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
