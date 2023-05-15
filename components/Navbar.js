'use client';

import React from 'react';
import { useState } from 'react';

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineLaptop,
  AiOutlineCode,
  AiOutlineRobot,
  AiOutlineDesktop,
  AiOutlineLayout,
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

import Image from 'next/image';
import logo from '@/public/logo.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="nav" className="flex justify-between">
      <a href="/" className="h-12 w-24 cursor-pointer">
        <Image src={logo} alt="logo" />
      </a>

      <div className="hidden text-base font-semibold md:flex">
        <a href="#home" className="mr-4 hover:text-rp-love">
          HOME
        </a>
        <a href="#about" className="mr-4 hover:text-rp-love">
          ABOUT
        </a>
        <a href="#experience" className="mr-4 hover:text-rp-love">
          EXPERIENCE
        </a>
        <a href="#projects" className="mr-4 hover:text-rp-love">
          PROJECTS
        </a>
        <a href="#contact" className="hover:text-rp-love">
          CONTACT
        </a>
      </div>

      <div
        className="flex cursor-pointer text-4xl md:hidden"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <div
        className={`${
          toggle ? 'w-full' : 'w-0'
        } absolute right-0 top-20 max-w-screen-md flex-col items-start overflow-hidden bg-rp-base p-4 text-3xl font-semibold transition-all md:hidden`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <a
          href="#home"
          className="flex w-full flex-row rounded-xl px-4 py-3 active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineHome className="mr-4 text-4xl" />
          Home
        </a>
        <a
          href="#about"
          className="flex w-full flex-row rounded-xl px-4 py-3 active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineInfoCircle className="mr-4 text-4xl" />
          About
        </a>
        <a
          href="#experience"
          className="flex w-full flex-row rounded-xl px-4 py-3 active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineLaptop className="mr-4 text-4xl" />
          Experience
        </a>
        <a
          href="#projects"
          className="flex w-full flex-row rounded-xl px-4 py-3 active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineCode className="mr-4 text-4xl" />
          Projects
        </a>
        <a
          href="#gptools"
          className="flex w-full flex-row rounded-xl px-4 py-3 pl-8 text-base font-normal active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineRobot className="mr-4 text-2xl" />
          GPTools
        </a>
        <a
          href="#webapps"
          className="flex w-full flex-row rounded-xl px-4 py-3 pl-8 text-base font-normal active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineDesktop className="mr-4 text-2xl" />
          Web Apps
        </a>
        <a
          href="#frontend"
          className="flex w-full flex-row rounded-xl px-4 py-3 pl-8 text-base font-normal active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineLayout className="mr-4 text-2xl" />
          Frontend Sites
        </a>
        <a
          href="#contact"
          className="flex w-full flex-row rounded-xl px-4 py-3 active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineMessage className="mr-4 text-4xl" />
          Contact
        </a>
        <a
          href="mailto:larry.huynh.dev@outlook.com"
          className="flex w-full flex-row rounded-xl px-4 py-3 pl-8 text-base font-normal active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineMail className="mr-4 text-2xl" />
          larry.huynh.dev@outlook.com
        </a>
        <a
          href="https://www.linkedin.com/in/larry-huynh-dev"
          target="_blank"
          className="flex w-full flex-row rounded-xl px-4 py-3 pl-8 text-base font-normal active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineLinkedin className="mr-4 text-2xl" />
          larry-huynh-dev
        </a>
        <a
          href="https://github.com/larryh12"
          target="_blank"
          className="flex w-full flex-row rounded-xl px-4 py-3 pl-8 text-base font-normal active:bg-rp-overlay active:text-rp-love"
        >
          <AiOutlineGithub className="mr-4 text-2xl" />
          larryh12
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
