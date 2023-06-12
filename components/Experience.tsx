import React from 'react';

import Image from 'next/image';
import SectionHead from './SectionHead';

const Experience = (props: any) => {
  const exp = props.exp;
  const projs = props.projs;

  return (
    <section
      id="experience"
      className="flex min-h-screen w-full items-center justify-center bg-base-100 px-4 py-20 sm:px-8"
    >
      <div className="prose w-full max-w-screen-lg">
        <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experience
        </h1>

        {exp.map((entry: any, index: number) => (
          <div key={index}>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
              <div>
                <h2>{entry.head.title}</h2>
                <h3>
                  <a href={entry.head.link} target="_blank">
                    {entry.head.name}
                  </a>
                </h3>
                <h4>{entry.head.time}</h4>
              </div>
              <Image
                src={entry.head.image}
                alt={entry.head.name}
                width={128}
                height={128}
                className="mask mask-squircle mb-0 object-contain"
              />
            </div>
            <ul>
              {entry.body.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {projs
              .filter((proj: any) => entry.work.includes(proj.name))
              .map((proj: any) => (
                <a
                  key={proj.name}
                  href={proj.html_url}
                  aria-label={proj.name}
                  target="_blank"
                  className="not-prose mt-10 grid grid-cols-1 gap-4 rounded-2xl no-underline transition hover:bg-neutral sm:grid-cols-2"
                >
                  <a
                    href={proj.homepage === '' ? proj.html_url : proj.homepage}
                    className="overflow-hidden rounded-2xl bg-primary"
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/larryh12/${proj.name}/main/docs/_og.png`}
                      alt={proj.name}
                      width={640}
                      height={320}
                      className="h-full object-cover transition hover:scale-105"
                    />
                  </a>
                  <div className="prose grid gap-4 p-2">
                    <h2 className="text-2xl text-base-content">{proj.name}</h2>
                    <p className="font-normal">{proj.description}</p>
                    <ul className="card-actions">
                      {proj.topics.map((topic: string) => (
                        <li
                          key={topic}
                          className="badge badge-neutral badge-sm sm:badge-md"
                        >
                          {`#${topic}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
