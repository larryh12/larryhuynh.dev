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
            <div className="text-rp-subtle">Hi, my name is</div>
            <div className="inline-block bg-gradient-to-r from-rp-rose to-rp-love bg-clip-text text-7xl font-bold text-transparent">
              LARRY
            </div>
            <div />
            <div className="inline-block bg-gradient-to-r from-rp-foam to-rp-pine bg-clip-text text-7xl font-bold text-transparent">
              HUYNH
            </div>
            <div className="text-rp-subtle">I am a</div>
            <div className="text-lg font-semibold">
              Software Engineering Graduate
            </div>
          </div>
          <div className="home__text__lower flex space-x-4 text-sm text-rp-text [&>a]:flex [&>a]:items-center [&>a]:space-x-1 [&>a]:rounded-lg [&>a]:bg-rp-overlay [&>a]:px-3 [&>a]:py-2 [&>a]:transition hover:[&>a]:scale-105 hover:[&>a]:bg-rp-highmed">
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
          <div className="home__avatar__blob overflow-hidden border-rp-text bg-rp-rose">
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
