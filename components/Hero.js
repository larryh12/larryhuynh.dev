import React from 'react';

import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { HiChevronDoubleDown, HiDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="home" className="flex py-16 sm:min-h-screen">
      <div className="home__wrapper flex w-full flex-col-reverse gap-4 sm:m-auto sm:flex-row sm:gap-0">
        <div className="home__text flex flex-1 sm:flex-1">
          <div className="home__text__wrapper m-auto flex flex-col">
            <p className="prose font-light">Hi, my name is</p>
            <p className="inline-block bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-7xl font-extrabold text-transparent">
              LARRY
            </p>
            <p className="inline-block bg-gradient-to-r from-secondary to-secondary-focus bg-clip-text text-7xl font-extrabold text-transparent">
              HUYNH
            </p>
            <p className="prose font-light">I am a</p>
            <p className="text-lg font-semibold">Graduate Software Developer</p>
            <ul className="mt-4 flex justify-between [&>a]:btn-sm [&>a]:btn [&>a]:gap-1">
              <a href="#about">
                <HiChevronDoubleDown />
                About me
              </a>
              <a
                href="https://www.linkedin.com/in/larry-huynh-dev/"
                target="_blank"
              >
                <HiDownload />
                Résumé / CV
              </a>
            </ul>
          </div>
        </div>
        <div className="home__avatar flex flex-1">
          <div className="home__avatar__wrapper blob m-auto overflow-hidden bg-gradient-to-r from-primary to-secondary">
            <Image src={avatar} width={256} height={256} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
