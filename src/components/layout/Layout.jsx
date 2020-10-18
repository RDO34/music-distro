import React from 'react';
import styled from 'styled-components';

import { GlobalStyles } from './global-styles';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#9ebae8, #e0daf0);
`;

export const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    {children}
  </Container>
);
