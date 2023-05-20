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
    <nav id="nav">
      <div className="nav__topbar flex items-center justify-between">
        <a href="/" className="w-24 cursor-pointer">
          <Image src={logo} alt="logo" />
        </a>

        <div className="hidden space-x-4 text-lg font-semibold md:block [&>a]:inline-block [&>a]:transition hover:[&>a]:scale-105 hover:[&>a]:text-rosewater">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </div>

        <div
          className="block cursor-pointer text-4xl md:hidden"
          onClick={() => setNavToggle((prev) => !prev)}
        >
          {NavToggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      <div
        className={`nav__menu ${
          NavToggle ? 'w-screen' : 'w-0'
        } absolute right-0 flex min-h-screen justify-center overflow-hidden bg-base text-3xl font-semibold transition-all md:hidden`}
        onClick={() => setNavToggle((prev) => !prev)}
      >
        <div className="nav__menu__links pt-8 [&>a]:flex [&>a]:items-center [&>a]:space-x-4 [&>a]:rounded-3xl [&>a]:px-4 [&>a]:py-3 [&>a]:transition hover:[&>a]:scale-110 hover:[&>a]:text-rosewater">
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
          <a href="#contacts">
            <AiOutlineMessage />
            <span>Contacts</span>
          </a>
          <div className="nav__menu__icons mt-6 flex justify-center [&>a]:rounded-xl [&>a]:p-2 [&>a]:transition hover:[&>a]:scale-125 hover:[&>a]:text-rosewater">
            <a href="mailto:larry.huynh.dev@outlook.com">
              <AiFillMail />
            </a>
            <a
              href="https://www.linkedin.com/in/larry-huynh-dev"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/larryh12" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>

      {/* <div
        className={`theme_menu ${
          ThemeToggle ? 'block' : 'hidden'
        } absolute flex flex-col items-end text-lg font-semibold [&>div]:flex [&>div]:cursor-pointer [&>div]:items-center [&>div]:transition hover:[&>div]:scale-105 hover:[&>div]:text-rosewater [&>span]:[&>div]:ml-1.5 [&>span]:[&>div]:h-4 [&>span]:[&>div]:w-4 [&>span]:[&>div]:rounded-full [&>span]:[&>div]:border [&>span]:[&>div]:border-text [&>span]:[&>div]:bg-base`}
        onClick={() => setThemeToggle((prev) => !prev)}
      >
        <div
          value="mocha"
          onClick={(e) => {
            changeTheme(e.target.getAttribute('value'));
          }}
        >
          Mocha <span className="mocha" />
        </div>
        <div
          value="macchiato"
          onClick={(e) => {
            changeTheme(e.target.getAttribute('value'));
          }}
        >
          Macchiato <span className="macchiato" />
        </div>
        <div
          value="frappe"
          onClick={(e) => {
            changeTheme(e.target.getAttribute('value'));
          }}
        >
          Frappé <span className="frappe" />
        </div>
        <div
          value="latte"
          onClick={(e) => {
            changeTheme(e.target.getAttribute('value'));
          }}
        >
          Latte <span className="latte" />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
