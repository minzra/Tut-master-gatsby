// gatsby browser renders for the browser? while this is some sorta server side
// gatsby also generates everything on the server so its super fast

import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
