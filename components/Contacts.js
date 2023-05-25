import React from 'react';
import Image from 'next/image';
import avatar from '@/public/avatar.png';

import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

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
            <ul className="card-body justify-center [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a]:border-b [&>a]:border-neutral-content [&>a]:py-2 [&>a]:font-medium sm:[&>a]:text-lg sm:[&>a]:font-semibold">
              <a>
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
            </ul>
          </div>
        </div>

        <div className="mt-16 w-full">
          <p className="prose mx-auto text-center text-xs">
            Copyright © 2023 larryhuynh.dev
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
