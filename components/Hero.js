import React from 'react';

import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { HiChevronDoubleDown, HiOutlineDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col-reverse lg:flex-row"
    >
      <div className="home__text__container flex flex-1 items-start justify-center lg:items-center">
        <div className="home__text__wrapper space-y-8">
          <div className="home__text__upper space-y-1">
            <p className="contrast-50">Hi, my name is</p>
            <p className="inline-block bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-7xl font-extrabold text-transparent">
              LARRY
            </p>
            <br />
            <p className="inline-block bg-gradient-to-r from-secondary to-secondary-focus bg-clip-text text-7xl font-extrabold text-transparent">
              HUYNH
            </p>
            <p className="contrast-50">I am a</p>
            <p className="text-lg font-semibold">Graduate Software Developer</p>
          </div>
          <div className="home__text__lower flex justify-between [&>a]:btn-sm [&>a]:btn [&>a]:gap-2">
            <a href="#about">
              <HiChevronDoubleDown />
              About me
            </a>
            <a
              href="https://www.linkedin.com/in/larry-huynh-dev/"
              target="_blank"
            >
              <HiOutlineDownload />
              Résumé / CV
            </a>
          </div>
        </div>
      </div>
      <div className="home__avatar__container flex flex-1 items-center justify-center">
        <div className="home__avatar__wrapper w-64">
          <div className="home__avatar__blob overflow-hidden bg-gradient-to-r from-primary to-secondary">
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
