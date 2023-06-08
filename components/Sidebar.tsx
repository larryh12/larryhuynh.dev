import React from 'react';

import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import NavItems from './NavItems';

const Sidebar = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-base-100 pt-20">
      <ul className="menu mx-auto w-fit gap-2 font-medium uppercase [&>*]:[&>a]:[&>li]:text-2xl">
        <NavItems />
      </ul>
      <ul className="menu menu-horizontal w-full justify-center text-xl">
        <li>
          <a
            aria-label="email"
            href="mailto:larry.huynh.dev@outlook.com"
            target="_blank"
          >
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a
            aria-label="linkedin"
            href="https://www.linkedin.com/in/larry-huynh-dev"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            aria-label="github"
            href="https://github.com/larryh12"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <div className="mt-2 flex flex-col items-center">
        <a
          className="btn-outline btn-active btn-sm btn h-fit py-2 normal-case"
          href="https://www.linkedin.com/in/larry-huynh-dev/"
          target="_blank"
        >
          <HiDownload className="text-lg" /> Résumé | CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
