import React from 'react';

import Image from 'next/image';
import { HiDownload } from 'react-icons/hi';

const Hero = (props: any) => {
  const name = props.name;
  return (
    <section
      id="home"
      className="flex w-full items-center justify-center py-20 sm:min-h-screen"
    >
      <div className="flex w-full flex-col-reverse gap-6 sm:flex-row">
        <div className="flex flex-1 justify-center">
          <div className="flex w-fit flex-col">
            <p className="prose font-light">Hi, my name is</p>
            <p className="inline-block bg-gradient-to-r from-primary-focus to-primary bg-clip-text text-7xl font-black uppercase text-transparent">
              {name.first}
            </p>
            <p className="inline-block bg-gradient-to-r from-secondary-focus to-secondary bg-clip-text text-7xl font-black uppercase text-transparent">
              {name.last}
            </p>
            <p className="prose font-light">I am a</p>
            <p className="text-lg font-semibold">{name.title}</p>
            <div className="flex gap-4 [&>a]:btn-outline [&>a]:btn-sm [&>a]:btn [&>a]:normal-case">
              <a href="#about" className="btn-active">
                About me
              </a>
              <a href="/cv" target="_blank">
                My resume
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="blob w-fit overflow-hidden bg-gradient-to-r from-primary to-secondary">
            <Image
              src={name.avatar}
              width={256}
              height={256}
              priority={true}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
