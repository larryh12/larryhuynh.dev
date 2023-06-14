import React from 'react';
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi';

const NavItems = () => {
  return (
    <>
      <li>
        <a href="/about">
          <HiOutlineUser className="text-2xl" />
          <span className="hidden sm:inline">About</span>
        </a>
      </li>
      <li>
        <a href="/contacts">
          <HiOutlineMail className="text-2xl" />
          <span className="hidden sm:inline">Contacts</span>
        </a>
      </li>
    </>
  );
};

export default NavItems;
