import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  height: 600px;
  background-image: ${props => props.cover};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 300px;
`;

export const PlaceholderAlbum = props => <Container {...props}>?</Container>;
