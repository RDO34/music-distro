import React from 'react';

import { GlobalStyles } from './global-styles';

export const Layout = ({ children, location = {} }) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
