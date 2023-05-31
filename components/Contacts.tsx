import React from 'react';
import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoFlowerOutline, IoLogoVercel } from 'react-icons/io5';

const Contacts = () => {
  return (
    <section id="contacts" className="flex px-8 py-16 sm:min-h-screen">
      <div className="contacts__wrapper m-auto flex flex-col">
        <div className="contacts__heading text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold text-transparent">
            <p>Contacts</p>
            <div className="h-0.5 bg-gradient-to-r from-primary to-secondary" />
          </div>
        </div>

        <div className="contacts__main w-full space-y-8 pt-8">
          <p className="text-center text-xl font-semibold">
            🤙 Get in touch with me!
          </p>
          <div className="card card-normal static bg-neutral shadow-2xl sm:card-side">
            <figure>
              <Image
                src={avatar}
                alt="avatar"
                className="m-8 mb-0 w-52 rounded-xl bg-base-200 sm:mb-8 sm:mr-0"
              />
            </figure>
            <div className="card-body justify-center [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a]:border-b [&>a]:border-neutral-content [&>a]:py-2 [&>a]:font-medium sm:[&>a]:text-lg sm:[&>a]:font-semibold">
              <a href="#">
                <FaUser /> Larry Huynh
              </a>
              <a href="mailto:larry.huynh.dev@outlook.com">
                <FaEnvelope /> larry.huynh.dev@outlook.com
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/larry-huynh-dev/"
              >
                <FaLinkedin /> larry-huynh-dev
              </a>
              <a target="_blank" href="https://github.com/larryh12">
                <FaGithub /> larryh12
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 w-full space-y-4">
          <p className="prose mx-auto text-center text-xs">
            Copyright © 2023 larryhuynh.dev
          </p>
          <a
            href="https://forthebadge.com/"
            target="_blank"
            aria-label="forthebadge"
            className="mx-auto flex w-fit items-center bg-accent [&>p]:px-4 [&>p]:py-2 [&>p]:font-bold [&>p]:text-base-100"
          >
            <p className="text-sm tracking-widest">BUILT WITH</p>
            <p className="bg-accent-focus text-xl">♥</p>
          </a>
          <div className="mx-auto flex w-fit gap-4 font-bold text-white [&>a]:flex [&>a]:items-center [&>a]:gap-1 [&>a]:px-4 [&>a]:py-1.5">
            <a
              href="https://daisyui.com/"
              target="_blank"
              aria-label="daisyui"
              className="bg-[#5A0EF8]"
            >
              <IoFlowerOutline className="text-lg" />
              <p>daisyUI</p>
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              aria-label="vercel"
              className="bg-black tracking-wider"
            >
              <IoLogoVercel className="text-lg" />
              <p>Vercel</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
