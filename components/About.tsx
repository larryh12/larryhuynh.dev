import React from 'react';
import Image from 'next/image';

const About = (props: any) => {
  const hello = props.hello;
  const qual = props.qual;
  const cert = props.cert;
  const tech = props.tech;

  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center bg-neutral px-4 py-20 sm:px-8"
    >
      <div className="prose w-full max-w-screen-lg">
        <h1 className="w-fit bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2>{hello.head}</h2>
            <ul></ul>
            {hello.body.map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div>
            <h2>🎓 Qualifications</h2>
            {qual.map((entry: any, index: number) => (
              <div key={index}>
                <h3>{entry.head.title}</h3>
                <h4>
                  {entry.head.year}
                  {' | '}
                  <a href={entry.head.link}>{entry.head.subtitle}</a>
                </h4>
                <ul>
                  {entry.body.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h2>📜 Certifications</h2>
            <h3></h3>
            {cert.map((entry: any, index: number) => (
              <h4 key={index} className="flex justify-between">
                <span>{entry.title}</span>
                <span>{entry.year}</span>
              </h4>
            ))}
          </div>
        </div>

        <div>
          <h2>{tech.head}</h2>
          <div className="flex flex-wrap gap-4">
            {tech.body.map((skill: any) => (
              <button
                key={skill.slug}
                aria-label={skill.title}
                className="btn-neutral btn bg-base-100 normal-case"
              >
                <Image
                  src={`https://cdn.simpleicons.org/${skill.slug}`}
                  alt={skill.title}
                  width={16}
                  height={16}
                  className="my-0"
                />
                {skill.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
