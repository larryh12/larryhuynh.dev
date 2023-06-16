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
          <div className="flex flex-col items-center justify-between gap-10">
            <figure className="animate-blob aspect-square w-52 overflow-hidden sm:w-72">
              <Image
                src={name.avatar}
                alt="avatar"
                width={512}
                height={512}
                className="animate-vercelfull"
              />
            </figure>
            <div className="flex flex-wrap justify-center gap-5 sm:w-full sm:flex-col">
              <HeroBtns />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
