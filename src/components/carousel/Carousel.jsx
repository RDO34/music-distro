import React, { useContext, Suspense } from 'react';
import { useDrag } from 'react-use-gesture';
import styled from 'styled-components';

import { Context } from '../../context';
import { isBrowser } from '../../utils';

const LoadableCarousel = React.lazy(() => import('react-spring-3d-carousel'));

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Carousel = ({ items }) => {
  const { idx, setIdx, debounce } = useContext(Context);
  const left = () => setIdx(idx - 1);
  const right = () => setIdx(idx + 1);

  const bind = useDrag(({ direction: [xDir], cancel }) => {
    if (xDir !== 0) {
      cancel();
      debounce();
      return xDir > 0 ? right() : left();
    }
  });

  return (
    <Container {...bind()}>
      {isBrowser() && (
        <Suspense fallback={<div />}>
          <LoadableCarousel slides={items} goToSlide={idx} />
        </Suspense>
      )}
    </Container>
  );
};
