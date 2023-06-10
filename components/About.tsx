import React from 'react';

import SectionHead from './SectionHead';

const About = (props: any) => {
  const hello = props.hello;
  const qual = props.qual;
  const cert = props.cert;
  const tech = props.tech;

  return (
    <section id="about" className="flex w-full py-20">
      <div className="flex w-full flex-col">
        <SectionHead title="! About" />

        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="prose flex-1">
            <h2>{hello.head}</h2>
            <ul></ul>
            {hello.body.map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="prose flex-1 sm:text-right">
            <h2>Qualifications</h2>
            {qual.map((entry: any, index: number) => (
              <div key={index}>
                <h3>{entry.head.title}</h3>
                <h4 className="space-x-2">
                  <span>{entry.head.year}</span>
                  <span>|</span>
                  <a className="underline-offset-2" href={entry.head.link}>
                    {entry.head.subtitle}
                  </a>
                </h4>
                <ul className="sm:list-none">
                  {entry.body.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <h2>Certifications</h2>
            {cert.map((entry: any, index: number) => (
              <h4 key={index} className="grid grid-cols-2">
                <span className="sm:ml-10 sm:text-left">{entry.year}</span>
                <span>{entry.title}</span>
              </h4>
            ))}
          </div>
        </div>

        <div className="prose my-10">
          <h2>{tech.head}</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {tech.body.map((skill: any, index: number) => (
            <div key={index} className="btn-neutral btn normal-case">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}`}
                alt={skill.title}
                width={15}
                height={15}
                className="my-0"
              />
              {skill.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
