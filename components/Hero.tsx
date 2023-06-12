import React from 'react';

import Image from 'next/image';
import HeroBtns from './HeroBtns';

const Hero = (props: any) => {
  const name = props.name;
  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center justify-center bg-base-100 px-4 py-20 sm:px-8"
    >
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="prose mx-auto w-fit lg:mx-0">
          <p>Hi, my name is</p>
          <h1 className="animate-vercel1 my-0 w-fit bg-clip-text text-7xl font-black uppercase text-transparent sm:text-9xl">
            {name.first}
          </h1>
          <h1 className="animate-vercel2 my-0 w-fit bg-clip-text text-7xl font-black uppercase text-transparent sm:text-9xl">
            {name.last}
          </h1>
          <p>I am a</p>
          <h2 className="animate-vercel3 my-0 w-fit bg-clip-text text-lg text-transparent sm:text-3xl">
            {name.title}
          </h2>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex flex-col justify-between">
            <div className="animate-blob overflow-hidden">
              <Image
                src={name.avatar}
                width={512}
                height={512}
                priority={true}
                alt="avatar"
                className="animate-vercelfull h-48 w-48 sm:h-72 sm:w-72"
              />
            </div>
            <HeroBtns />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
