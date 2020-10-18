import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  height: 600px;
  background-image: linear-gradient(#43a8ff, #0f83e8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300px;
`;

export const PlaceholderAlbum = () => <Container>?</Container>;
