import React from 'react';

import {
  HiOutlineHome,
  HiOutlineDesktopComputer,
  HiOutlineCode,
  HiOutlineUserCircle,
  HiOutlineChat,
  HiOutlineDownload,
} from 'react-icons/hi';

import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="w-96 max-w-[75vw] space-y-8 bg-base-100 p-8">
      <ul className="menu m-auto w-fit text-2xl">
        <li className="hover-bordered">
          <a href="#home">
            <HiOutlineHome />
            Home
          </a>
        </li>
        <li className="hover-bordered">
          <a href="#about">
            <HiOutlineUserCircle />
            About
          </a>
        </li>
        <li className="hover-bordered">
          <a href="#experience">
            <HiOutlineCode />
            Experience
          </a>
        </li>
        <li className="hover-bordered">
          <a href="#projects">
            <HiOutlineDesktopComputer />
            Projects
          </a>
        </li>
        <li className="hover-bordered">
          <a href="#contacts">
            <HiOutlineChat />
            Contacts
          </a>
        </li>
      </ul>
      <ul className="m-auto flex w-fit gap-2 [&>li]:btn-sm [&>li]:btn [&>li]:text-2xl">
        <li>
          <a href="mailto:larry.huynh.dev@outlook.com">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/larry-huynh-dev" target="_blank">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/larryh12" target="_blank">
            <AiFillGithub />
          </a>
        </li>
      </ul>
      <div className="m-auto w-fit">
        <a
          className="btn gap-2"
          href="https://www.linkedin.com/in/larry-huynh-dev/"
          target="_blank"
        >
          <HiOutlineDownload className="text-xl" /> Résumé / CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
