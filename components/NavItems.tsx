'use client';

import React from 'react';
import {
  HiOutlineChat,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineHome,
  HiOutlineUserCircle,
} from 'react-icons/hi';

const closeSidebar = () => {
  const myDrawer = document.getElementById('my-drawer') as HTMLInputElement;
  myDrawer.checked = false;
};

const NavItems = () => {
  return (
    <>
      <li onClick={closeSidebar}>
        <a href="#home">
          <HiOutlineHome /> Home
        </a>
      </li>
      <li onClick={closeSidebar}>
        <a href="#about">
          <HiOutlineUserCircle /> About
        </a>
      </li>
      <li onClick={closeSidebar}>
        <a href="#experience">
          <HiOutlineCode /> Experience
        </a>
      </li>
      <li onClick={closeSidebar}>
        <a href="#projects">
          <HiOutlineDesktopComputer /> Projects
        </a>
      </li>
      <li onClick={closeSidebar}>
        <a href="#contacts">
          <HiOutlineChat /> Contacts
        </a>
      </li>
    </>
  );
};

export default NavItems;
