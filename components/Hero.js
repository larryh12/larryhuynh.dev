import React from 'react';

import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col-reverse md:flex-row"
    >
      <div className="home__text__container flex flex-1 items-start justify-center md:items-center">
        <div className="home__text__wrapper space-y-8">
          <div className="home__text__upper space-y-0.5">
            <div className="text-overlay1">Hi, my name is</div>
            <div className="inline-block bg-gradient-to-r from-flamingo to-maroon bg-clip-text text-7xl font-bold text-transparent">
              LARRY
            </div>
            <div />
            <div className="inline-block bg-gradient-to-r from-sky to-sapphire bg-clip-text text-7xl font-bold text-transparent">
              HUYNH
            </div>
            <div className="text-overlay1">I am a</div>
            <div className="text-lg font-semibold">
              Software Engineering Graduate
            </div>
          </div>
          <div className="home__text__lower flex space-x-4 text-sm [&>a]:flex [&>a]:items-center [&>a]:space-x-1 [&>a]:rounded-xl [&>a]:bg-surface0 [&>a]:px-3 [&>a]:py-2 [&>a]:transition hover:[&>a]:scale-105 hover:[&>a]:bg-overlay0">
            <a href="#about">
              <AiOutlineInfoCircle />
              <span>About me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/larry-huynh-dev/"
              target="_blank"
            >
              <AiOutlineDownload />
              <span>Résumé/CV</span>
            </a>
          </div>
        </div>
      </div>
      <div className="home__avatar__container flex flex-1 items-center justify-center">
        <div className="home__avatar__wrapper max-w-[66%]">
          <div className="home__avatar__blob overflow-hidden bg-gradient-to-r from-flamingo from-30% to-sky">
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
