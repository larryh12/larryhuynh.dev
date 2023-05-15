import React from 'react';

import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse py-8 md:flex-row md:py-64"
    >
      <div className="flex-1">
        <div className="my-0.5 text-rp-subtle md:my-1">Hi, my name is</div>
        <div className="my-0.5 inline-block bg-gradient-to-r from-rp-rose to-rp-love bg-clip-text text-7xl font-bold text-transparent md:my-1">
          LARRY
        </div>
        <div />
        <div className="my-0.5 inline-block bg-gradient-to-r from-rp-foam to-rp-pine bg-clip-text text-7xl font-bold text-transparent md:my-1">
          HUYNH
        </div>
        <div className="my-0.5 text-rp-subtle md:my-1">I am a</div>
        <div className="my-0.5 text-lg font-semibold md:my-1">
          Software Engineering Graduate
        </div>
        <div className="mt-4 flex flex-row text-sm text-rp-text md:mt-8">
          <a href="#about">
            <div className="mr-6 flex flex-row rounded-lg bg-rp-overlay p-2 pr-4 hover:bg-rp-highmed">
              <AiOutlineInfoCircle className="mr-1 pt-1 text-xl" />
              About me
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/larry-huynh-dev/"
            target="_blank"
          >
            <div className="flex flex-row rounded-lg bg-rp-overlay p-2 pr-4 hover:bg-rp-highmed">
              <AiOutlineDownload className="mr-1 pt-1 text-xl" />
              Résumé/CV
            </div>
          </a>
        </div>
      </div>
      <div className="mb-12 flex flex-1 items-center justify-center md:justify-end">
        <div className="max-w-[67%]">
          <Image src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
