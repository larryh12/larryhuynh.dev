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
        <h1 className="my-0 w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </h1>
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projs.map((proj: any) => (
            <div
              key={proj.name}
              className="not-prose flex flex-col gap-2 rounded-2xl no-underline transition hover:bg-base-100"
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
                className="prose flex flex-col gap-4 p-4 pb-10"
              >
                <h2 className="text-2xl font-semibold text-neutral-content">
                  {proj.name}
                </h2>
                <p className="flex-1 font-normal text-neutral-content/80">
                  {proj.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {proj.topics.map((topic: string) => (
                    <li
                      key={topic}
                      className="w-fit rounded-full bg-base-100 px-2 py-0.5 text-sm font-medium text-base-content"
                    >
                      {`#${topic}`}
                    </li>
                  ))}
                </ul>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
