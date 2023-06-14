import React from 'react';
import { HiAnnotation, HiUser } from 'react-icons/hi';

const HeroBtns = () => {
  return (
    <>
      <a
        href="/about"
        className="btn-outline btn-active btn-sm btn mb-5 mt-10 normal-case hover:bg-transparent hover:text-base-content"
      >
        <HiUser className="text-base" /> About Me
      </a>
      <a href="/contacts" className="btn-outline btn-sm btn normal-case">
        <HiAnnotation className="text-base" /> Say Hello
      </a>
    </>
  );
};

export default HeroBtns;
