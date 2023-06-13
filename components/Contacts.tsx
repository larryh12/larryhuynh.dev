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
        <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contacts
        </h1>
        <div className="flex flex-col items-center">
          <h2>🤙 Get in touch with me!</h2>
          <div className="not-prose flex flex-col gap-8 rounded-2xl bg-neutral px-8 py-16 text-neutral-content drop-shadow-lg sm:flex-row">
            <div className="animate-vercelfull mx-auto h-fit w-fit flex-1 overflow-hidden rounded-xl p-0.5">
              <Image
                src={links.name.avatar}
                alt="avatar"
                width={256}
                height={256}
                className="w-48 rounded-xl bg-neutral sm:w-64"
              />
            </div>
            <div className="grid flex-2 gap-4 font-medium [&>*]:flex [&>*]:items-center [&>*]:gap-4 [&>*]:border-b [&>*]:border-neutral-content [&>*]:pb-1">
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
      </div>
    </section>
  );
};

export default Contacts;
