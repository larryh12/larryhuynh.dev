import React from 'react';

import Image from 'next/image';

const Projects = (props: any) => {
  const expProjs = props.exp.reduce(
    (accumulator: Array<string>, expEntry: { work: Array<string> }) => {
      return accumulator.concat(expEntry.work);
    },
    []
  );
  const projs = props.projs.filter(
    (proj: any) => !expProjs.includes(proj.name)
  );

  return (
    <section
      id="projects"
      className="flex min-h-screen w-full items-center justify-center bg-neutral px-4 py-20 sm:px-8"
    >
      <div className="prose w-full max-w-screen-lg">
        <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </h1>
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projs.map((proj: any) => (
            <a
              key={proj.name}
              href={proj.html_url}
              aria-label={proj.name}
              target="_blank"
              className="not-prose flex flex-col gap-4 rounded-2xl no-underline transition hover:bg-base-100"
            >
              <a
                target="_blank"
                href={proj.homepage === '' ? proj.html_url : proj.homepage}
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
              <div className="prose space-y-4 p-2 pb-10 text-base-content">
                <h2 className="text-2xl font-semibold">{proj.name}</h2>
                <p className="font-normal text-base-content/80">
                  {proj.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {proj.topics.map((topic: string) => (
                    <li
                      key={topic}
                      className="w-fit rounded-full bg-base-100 px-3 py-0.5 text-sm font-medium"
                    >
                      {`#${topic}`}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
