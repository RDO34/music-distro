import React, { useContext, Suspense } from 'react';
import { useDrag } from 'react-use-gesture';
import styled from 'styled-components';

import { ReactContext } from '../../context';
import { isBrowser } from '../../utils';
import { LEFT, RIGHT } from '../../constants';

const LazyCarousel = React.lazy(() => import('react-spring-3d-carousel'));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 101vh;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(#9ebae8, #e0daf0);
`;

export const Carousel = ({ items }) => {
  const { debounce, send, context } = useContext(ReactContext);
  const bind = useDrag(({ direction: [xDir], cancel }) => {
    if (xDir !== 0) {
      cancel();
      debounce();
      return xDir > 0 ? send(RIGHT) : send(LEFT);
    }
  });

  return (
    <Container {...bind()}>
      {isBrowser() && (
        <Suspense fallback={<div />}>
          <LazyCarousel slides={items} goToSlide={context.currentIndex} />
        </Suspense>
      )}
    </Container>
  );
};
