import React from 'react';
import NavItems from './NavItems';
import SideBtns from './SideBtns';

const Sidebar = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto bg-base-100/80 pt-20 backdrop-blur-3xl">
      <ul className="menu mx-auto w-fit gap-2 font-medium uppercase [&>*]:[&>a]:[&>li]:text-2xl">
        <NavItems />
      </ul>
      <ul className="menu menu-horizontal w-full justify-center text-xl">
        <SideBtns />
      </ul>
    </div>
  );
};

export default Sidebar;
