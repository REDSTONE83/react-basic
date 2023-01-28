import React from 'react';
import Avatar from './Avatar';

export default function Profile({ src, name, isNew }) {
  return (
    <div className='profile'>
      <Avatar image={src} isNew={isNew} />
      <h1>{name}</h1>
      <p>Front-end developer</p>
    </div>
  );
}
