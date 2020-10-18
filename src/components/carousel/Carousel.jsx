import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import ReactCarousel from 'react-spring-3d-carousel';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Carousel = ({ items }) => {
  const [idx, setIdx] = useState(0);
  const left = () => setIdx(idx - 1);
  const right = () => setIdx(idx + 1);
  const bind = useDrag(({ direction: [xDir], cancel }) => {
    if (xDir !== 0) {
      cancel();
      return xDir > 0 ? right() : left();
    }
  });

  return (
    <Container {...bind()}>
      <ReactCarousel slides={items} goToSlide={idx} />
    </Container>
  );
};
