import Link from 'next/link';
import React from 'react';
import { HiAnnotation, HiUser } from 'react-icons/hi';

const HeroBtns = () => {
  return (
    <>
      <Link
        href="/about"
        className="btn-outline btn-active btn-sm btn normal-case hover:bg-transparent hover:text-base-content"
      >
        <HiUser className="text-base" /> About Me
      </Link>
      <Link href="/contacts" className="btn-outline btn-sm btn normal-case">
        <HiAnnotation className="text-base" /> Say Hello
      </Link>
    </>
  );
};

export default HeroBtns;
