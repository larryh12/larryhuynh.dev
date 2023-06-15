import Link from 'next/link';
import React from 'react';
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi';

const NavItems = () => {
  return (
    <>
      <li>
        <Link href="/about" aria-label="About">
          <HiOutlineUser className="text-2xl" />
          <span className="hidden sm:inline">About</span>
        </Link>
      </li>
      <li>
        <Link href="/contacts" aria-label="Contacts">
          <HiOutlineMail className="text-2xl" />
          <span className="hidden sm:inline">Contacts</span>
        </Link>
      </li>
    </>
  );
};

export default NavItems;
