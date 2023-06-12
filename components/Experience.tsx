import React from 'react';
import Image from 'next/image';

const Experience = (props: any) => {
  const exp = props.exp;
  const projs = props.projs;

  return (
    <section
      id="experience"
      className="flex min-h-screen w-full items-center justify-center bg-base-100 px-4 py-20 sm:px-8"
    >
      <div className="prose w-full max-w-screen-lg">
        <h1 className="my-0 w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experience
        </h1>

        {exp.map((entry: any, index: number) => (
          <div key={index}>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
              <div>
                <h2 className="sm:mt-20">{entry.head.title}</h2>
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
                className="mask mask-squircle mb-0 mt-20 object-contain"
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
                <div
                  key={proj.name}
                  className="not-prose mt-10 grid grid-cols-1 gap-2 rounded-2xl no-underline transition hover:bg-neutral sm:grid-cols-2 sm:gap-6"
                >
                  <a
                    href={proj.homepage === '' ? proj.html_url : proj.homepage}
                    aria-label={proj.name}
                    target="_blank"
                    className="overflow-hidden rounded-2xl drop-shadow-lg"
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/larryh12/${proj.name}/main/docs/_og.png`}
                      alt={proj.name}
                      width={640}
                      height={320}
                      className="h-full object-cover transition hover:scale-105"
                    />
                  </a>
                  <a
                    href={proj.html_url}
                    aria-label={proj.name}
                    target="_blank"
                    className="prose flex flex-col gap-4 p-4 pb-10 sm:pb-4"
                  >
                    <h2 className="text-2xl font-semibold text-base-content">
                      {proj.name}
                    </h2>
                    <p className="flex-1 font-normal text-base-content/80">
                      {proj.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {proj.topics.map((topic: string) => (
                        <li
                          key={topic}
                          className="w-fit rounded-full bg-neutral px-2 py-0.5 text-sm font-medium text-neutral-content"
                        >
                          {`#${topic}`}
                        </li>
                      ))}
                    </ul>
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
