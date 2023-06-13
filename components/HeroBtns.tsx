import React from 'react';
import { HiChatAlt, HiDownload } from 'react-icons/hi';

const HeroBtns = () => {
  return (
    <>
      <a
        href="#contacts"
        className="btn-outline btn-active btn-sm btn mb-5 mt-10 normal-case hover:bg-transparent hover:text-base-content"
      >
        <HiChatAlt className="text-base" /> Say Hello
      </a>
      <a
        href="/cv"
        target="_blank"
        className="btn-outline btn-sm btn normal-case"
      >
        <HiDownload className="text-base" /> Download CV
      </a>
    </>
  );
};

export default HeroBtns;
