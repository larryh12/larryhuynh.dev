import React from 'react';

import Image from 'next/image';
import SectionHead from './SectionHead';

const Experience = (props: any) => {
  const exp = props.exp;
  const projs = props.projs;

  return (
    <section
      id="experience"
      className="flex w-full items-center justify-center bg-base-100 px-4 py-20 sm:px-8 lg:min-h-screen"
    >
      <div className="flex w-full max-w-screen-lg flex-col">
        <SectionHead title="Experience" />
        <div className="flex flex-col">
          {exp.map((entry: any, index: number) => (
            <div key={index} className="prose max-w-none">
              <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
                <div>
                  <h2>{entry.head.title}</h2>
                  <h3 className="w-fit">
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
                  className="mask mask-squircle my-0 object-contain"
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
                    href={proj.homepage === '' ? proj.html_url : proj.homepage}
                    aria-label={proj.name}
                    target="_blank"
                    className="not-prose card card-compact no-underline transition sm:card-side sm:card-normal hover:bg-neutral"
                  >
                    <figure>
                      <Image
                        src={`https://raw.githubusercontent.com/larryh12/${proj.name}/main/docs/_og.png`}
                        alt={proj.name}
                        width={640}
                        height={320}
                        className="h-full rounded-2xl object-cover"
                      />
                    </figure>
                    <div className="card-body text-base-content/80">
                      <h2 className="card-title text-base-content/100">
                        {proj.name}
                      </h2>
                      <p>{proj.description}</p>
                      <ul className="card-actions mt-2">
                        {proj.topics.map((topic: string) => (
                          <li
                            key={topic}
                            className="badge badge-outline badge-sm"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
