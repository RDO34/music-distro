import React, { useState } from 'react';

import { Release, Layout, Carousel } from '../components';
import { ContextProvider } from '../context';

const items = [
  {
    coverImage: 'linear-gradient(90deg, rgba(93,90,149,1) 0%, rgba(193,245,255,1) 100%)',
    title: 'Album #1'
  },
  {
    coverImage: 'radial-gradient(circle, rgba(120,143,255,1) 0%, rgba(255,143,166,1) 100%)',
    title: 'Album #2'
  },
  {
    coverImage: 'linear-gradient(0deg, rgba(116,208,153,1) 0%, rgba(253,209,45,1) 100%)',
    title: 'Album #3'
  }
];

export default () => {
  const [idx, setIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = items.map(({ coverImage, title }, index) => ({
    key: title,
    content: <Release cover={coverImage} title={title} currentIdx={index} />
  }));

  const debounce = () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <ContextProvider value={{ idx, setIdx, isTransitioning, debounce }}>
      <Layout>
        <Carousel items={slides} />
      </Layout>
    </ContextProvider>
  );
};
