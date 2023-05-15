import React from 'react';

import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { AiOutlineDownload, AiOutlineInfoCircle } from 'react-icons/ai';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse justify-between py-16 md:flex-row md:py-64"
    >
      <div className="flex-1">
        <div className="my-1 text-rp-subtle">Hi, my name is</div>
        <div className="my-1 inline-block bg-gradient-to-r from-rp-rose to-rp-love bg-clip-text text-7xl font-bold text-transparent">
          LARRY
        </div>
        <div />
        <div className="my-1 inline-block bg-gradient-to-r from-rp-foam to-rp-pine bg-clip-text text-7xl font-bold text-transparent">
          HUYNH
        </div>
        <div className="my-1 text-rp-subtle">I am a</div>
        <div className="my-1 text-lg font-semibold">
          Software Engineering Graduate
        </div>
        <div className="mt-8 flex flex-row text-sm text-rp-text">
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
      <div className="mb-12 flex flex-1 items-center justify-center">
        <div className="max-w-[50%]">
          <Image src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
