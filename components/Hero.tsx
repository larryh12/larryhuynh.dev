import React from 'react';

import Image from 'next/image';
import HeroBtns from './HeroBtns';

const Hero = (props: any) => {
  const name = props.name;
  return (
    <section
      id="home"
      className="flex w-full items-center justify-center py-20 lg:min-h-screen"
    >
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <div className="prose mx-auto w-fit lg:mx-0">
            <p>Hi, my name is</p>
            <h1 className="my-0 w-fit bg-gradient-to-r from-primary-focus to-primary bg-clip-text text-7xl uppercase text-transparent sm:text-9xl">
              {name.first}
            </h1>
            <h1 className="my-0 w-fit bg-gradient-to-r from-secondary-focus to-secondary bg-clip-text text-7xl uppercase text-transparent sm:text-9xl">
              {name.last}
            </h1>
            <p>I am a</p>
            <h2 className="my-0 text-lg sm:text-3xl">{name.title}</h2>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="flex flex-col justify-between">
            <Image
              src={name.avatar}
              width={512}
              height={512}
              priority={true}
              alt="avatar"
              className="animate-blob aspect-square w-48 overflow-hidden bg-gradient-to-r from-primary to-secondary sm:w-72"
            />
            <HeroBtns />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
