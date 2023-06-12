import React from 'react';
import Image from 'next/image';

import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = (props: any) => {
  const links = props.links;

  return (
    <section
      id="contacts"
      className="flex min-h-screen w-full items-center justify-center bg-base-100 px-4 py-20 sm:px-8"
    >
      <div className="prose w-full max-w-screen-lg">
        <h1 className="mx-auto my-0 w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contacts
        </h1>
        <div className="flex flex-col items-center">
          <h2 className="mt-20">🤙 Get in touch with me!</h2>
          <div className="not-prose mt-10 flex flex-col gap-10 rounded-2xl bg-neutral px-10 py-20 text-neutral-content drop-shadow-lg sm:flex-row">
            <div className="animate-vercelfull mx-auto h-fit w-fit flex-1 overflow-hidden rounded-xl p-0.5">
              <Image
                src={links.name.avatar}
                alt="avatar"
                width={256}
                height={256}
                className="rounded-xl bg-neutral"
              />
            </div>
            <div className="grid flex-2 gap-4 text-lg font-medium [&>*]:flex [&>*]:items-center [&>*]:gap-4 [&>*]:border-b [&>*]:border-neutral-content [&>*]:pb-1">
              <span>
                <FaUser /> {links.name.first} {links.name.last}
              </span>
              <a href={links.email.link}>
                <FaEnvelope /> {links.email.id}
              </a>
              <a href={links.linkedin.link}>
                <FaLinkedin />
                {links.linkedin.id}
              </a>
              <a href={links.github.link}>
                <FaGithub />
                {links.github.id}
              </a>
            </div>
          </div>
        </div>
        <p className="absolute bottom-5 w-full max-w-screen-lg text-center text-xs">
          Built with ❤️ © 2023 larryhuynh.dev
        </p>
      </div>
    </section>
  );
};

export default Contacts;
