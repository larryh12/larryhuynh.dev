import React from 'react';
import NavItems from './NavItems';
import SideBtns from './SideBtns';

const Sidebar = () => {
  return (
    <div className="h-screen w-screen space-y-4 overflow-y-auto bg-base-100/80 pt-20 backdrop-blur-3xl">
      <ul className="menu mx-auto w-fit gap-4 font-medium [&>a]:[&>li]:text-xl [&>*]:[&>a]:[&>li]:text-3xl">
        <NavItems />
      </ul>
      <ul className="menu menu-horizontal w-full justify-center text-3xl">
        <SideBtns />
      </ul>
    </div>
  );
};

export default Sidebar;
