import React, { useContext } from 'react';
import styled from 'styled-components';

import { ReactContext } from '../../context';
import { scrollToTop } from '../../utils';
import { RETURN } from '../../constants';

const Container = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(62, 62, 62, 1) 83%, rgba(224, 218, 240, 1) 100%);
  height: 100vh;
`;

export const Details = () => {
  const { send } = useContext(ReactContext);
  return (
    <Container
      id="release-details"
      onClick={() => {
        scrollToTop();
        setTimeout(() => send(RETURN), 500);
      }}
    >
      Lorem ipsum
    </Container>
  );
};
