import React, { useContext } from 'react';
import styled from 'styled-components';

import { PlaceholderAlbum } from '../placeholder-album/PlaceholderAlbum';
import { Context } from '../../context';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Release = ({ cover, title, currentIdx }) => {
  const { idx, setIdx, isTransitioning } = useContext(Context);

  const onClick = () => {
    if (currentIdx !== idx && !isTransitioning) {
      setIdx(currentIdx);
    }
  };

  return (
    <Container>
      <PlaceholderAlbum onClick={onClick} cover={cover} />
      {title}
    </Container>
  );
};
