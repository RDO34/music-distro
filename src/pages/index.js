import React from 'react';

import { PlaceholderAlbum, Layout, Carousel } from '../components';

const items = [
  {
    coverImage: 'some image',
    title: 'Album #1'
  },
  {
    coverImage: 'some image',
    title: 'Album #2'
  },
  {
    coverImage: 'some image',
    title: 'Album #3'
  }
];

export default () => {
  const slides = items.map(({ coverImage, title }) => ({
    key: title,
    content: (
      <>
        <PlaceholderAlbum />
        {title}
      </>
    )
  }));

  return (
    <Layout>
      <Carousel items={slides} />
    </Layout>
  );
};
