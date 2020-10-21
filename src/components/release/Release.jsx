import React, { useContext } from 'react';
import styled from 'styled-components';

import { PlaceholderAlbum } from '../placeholder-album/PlaceholderAlbum';
import { ReactContext } from '../../context';
import { SELECT, VIEW } from '../../constants';
import { scrollToDetails } from '../../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Release = ({ cover, title, index }) => {
  const { isTransitioning, context, send } = useContext(ReactContext);

  const onClick = () => {
    if (index !== context.currentIndex && !isTransitioning) {
      send(SELECT, { index });
    } else {
      send(VIEW);
      setTimeout(() => scrollToDetails(), 100);
    }
  };

  return (
    <Container>
      <PlaceholderAlbum onClick={onClick} cover={cover} />
      {title}
    </Container>
  );
};
