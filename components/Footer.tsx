'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { HiOutlineHome } from 'react-icons/hi';

const Footer = () => {
  const pathname = usePathname();
  return (
    <section className="flex w-full items-center justify-center p-4 sm:p-8">
      {pathname === '/' ? (
        <p className="prose text-xs">Built with ❤️ © 2023 larryhuynh.dev</p>
      ) : (
        <a
          href="/"
          className="flex items-center gap-1 font-medium underline underline-offset-4"
        >
          <HiOutlineHome className="text-xl" /> Home
        </a>
      )}
    </section>
  );
};

export default Footer;
