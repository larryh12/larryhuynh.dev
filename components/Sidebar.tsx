import React from 'react';
import { HiDownload } from 'react-icons/hi';
import NavItems from './NavItems';
import SideBtns from './SideBtns';

const Sidebar = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-base-100/80 pt-20 backdrop-blur-3xl ">
      <ul className="menu mx-auto w-fit gap-2 font-medium uppercase [&>*]:[&>a]:[&>li]:text-2xl">
        <NavItems />
      </ul>
      <ul className="menu menu-horizontal w-full justify-center text-xl">
        <SideBtns />
      </ul>
      <div className="mt-4 flex flex-col items-center">
        <a
          className="btn-outline btn-active btn-sm btn normal-case"
          href="/cv"
          target="_blank"
        >
          <HiDownload className="text-lg" /> Resume / CV
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
