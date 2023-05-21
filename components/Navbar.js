'use client';

import React from 'react';
import { useState } from 'react';

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCode,
  AiOutlineDesktop,
  AiOutlineMessage,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

import Image from 'next/image';
import logo from '@/public/logo.svg';

const Navbar = () => {
  const [NavToggle, setNavToggle] = useState(false);
  const [ThemeToggle, setThemeToggle] = useState(false);

  const changeTheme = (theme) => {
    document.body.classList.remove('mocha', 'macchiato', 'frappe', 'latte');
    document.body.classList.add(theme);
  };

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div classname="navbar-center"></div>
        <div classname="navbar-end"></div>
      </div>
    </nav>
  );
};

export default Navbar;
