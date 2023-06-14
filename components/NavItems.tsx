import React from 'react';
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi';

const NavItems = () => {
  return (
    <>
      <li>
        <a href="/about" aria-label="About">
          <HiOutlineUser className="text-2xl" />
          <span className="hidden sm:inline">About</span>
        </a>
      </li>
      <li>
        <a href="/contacts" aria-label="Contacts">
          <HiOutlineMail className="text-2xl" />
          <span className="hidden sm:inline">Contacts</span>
        </a>
      </li>
    </>
  );
};

export default NavItems;
