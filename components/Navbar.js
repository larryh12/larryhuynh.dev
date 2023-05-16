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
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="nav">
      <div id="nav__topbar" className="flex items-center justify-between">
        <a href="/" className="w-24 cursor-pointer">
          <Image src={logo} alt="logo" />
        </a>

        <div className="hidden space-x-4 text-lg font-semibold md:block hover:[&>a]:text-rp-love">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div
          className="block cursor-pointer text-4xl md:hidden"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      <div
        id="nav__menu"
        className={`${
          toggle ? 'w-screen' : 'w-0'
        } absolute right-0 grid min-h-screen place-items-center overflow-hidden bg-rp-base text-3xl font-semibold transition-all md:hidden`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div
          id="nav__menu__links"
          className="space-y-6 [&>a]:flex [&>a]:items-center [&>a]:space-x-4 active:[&>a]:text-rp-love"
        >
          <a href="#home">
            <AiOutlineHome />
            <span>Home</span>
          </a>
          <a href="#about">
            <AiOutlineInfoCircle />
            <span>About</span>
          </a>
          <a href="#experience">
            <AiOutlineCode />
            <span>Experience</span>
          </a>
          <a href="#projects">
            <AiOutlineDesktop />
            <span>Projects</span>
          </a>
          <a href="#contact">
            <AiOutlineMessage />
            <span>Contact</span>
          </a>
        </div>
        <div
          id="nav__menu__icons"
          className="flex space-x-4 active:[&>a]:text-rp-love"
        >
          <a href="mailto:larry.huynh.dev@outlook.com">
            <AiFillMail />
          </a>
          <a href="https://www.linkedin.com/in/larry-huynh-dev" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/larryh12" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
