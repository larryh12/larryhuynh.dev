import React from 'react';

import {
  HiOutlineHome,
  HiOutlineDesktopComputer,
  HiOutlineCode,
  HiOutlineUserCircle,
  HiOutlineChat,
} from 'react-icons/hi';

import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="w-96 max-w-[75vw] bg-base-300 p-6">
      <ul className="menu mx-auto my-6 w-fit text-2xl">
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
      <ul className="mx-auto flex w-fit [&>li]:btn-ghost [&>li]:btn [&>li]:text-2xl">
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
    </div>
  );
};

export default Sidebar;
