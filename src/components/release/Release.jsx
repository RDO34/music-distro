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
  const { isTransitioning, context, send, debounce } = useContext(ReactContext);

  const onClick = () => {
    if (!isTransitioning) {
      if (index !== context.currentIndex) {
        debounce();
        send(SELECT, { index });
      } else {
        send(VIEW);
        setTimeout(() => scrollToDetails(), 100);
      }
    }
  };

  return (
    <Container>
      <PlaceholderAlbum onClick={onClick} cover={cover} />
      {title}
    </Container>
  );
};
