import React from 'react';
import Image from 'next/image';

const Experience = (props: any) => {
  const exp = props.exp;

  return (
    <section
      id="experience"
      className="flex min-h-screen w-full items-center justify-center bg-neutral px-4 py-20 sm:px-8"
    >
      <div className="prose">
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
              <div>
                <Image
                  src={entry.head.image}
                  alt={entry.head.name}
                  width={128}
                  height={128}
                  className="mask mask-squircle mx-auto mb-0 object-contain"
                />
              </div>
            </div>
            <ul>
              {entry.body.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
