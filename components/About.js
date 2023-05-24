import React from 'react';

import { HiExternalLink } from 'react-icons/hi';
import { ImQuotesLeft } from 'react-icons/im';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
} from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="flex min-h-screen p-8">
      <div className="about__wrapper m-auto flex flex-col">
        <div className="about__heading text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold text-transparent">
            <p>About</p>
            <div className="h-0.5 bg-gradient-to-r from-primary to-secondary" />
          </div>
        </div>

        <div className="about__main flex flex-col lg:flex-row lg:gap-8">
          <div className="about__main__quotes flex-1 space-y-4">
            <ImQuotesLeft className="text-xl" />
            <p>👋 Hi there, I&apos;m Larry.</p>
            <p>
              🇦🇺 I&apos;m a graduate software developer based in Queensland,
              Australia.
            </p>
            <p>
              🔥 I enjoy learning about technology and science. I&apos;m also an
              avid problem solver, aspired to develop highly performant
              solutions that focus on scalability and availability.
            </p>
            <div className="about__main__quotes__skills">
              <p>💻 I&apos;m currently learning:</p>
              <div className="mt-2 flex flex-wrap gap-2 [&>a]:btn-xs [&>a]:btn [&>a]:gap-1 [&>a]:normal-case">
                <a>
                  <SiReact /> React
                </a>
                <a>
                  <SiNextdotjs /> Next.js
                </a>
                <a>
                  <SiTailwindcss /> Tailwind CSS
                </a>
                <a>
                  <SiJavascript /> JavaScript
                </a>
                <a>
                  <SiTypescript /> TypeScript
                </a>
                <a>
                  <SiPython /> Python
                </a>
              </div>
            </div>
          </div>

          <div className="about__main__divider hidden w-0.5 bg-gradient-to-b from-primary to-secondary lg:block" />

          <div className="about__main__qual flex-1 space-y-4 pt-8">
            <p className="amq__heading text-xl font-semibold">Qualifications</p>
            <div className="amq__gu space-y-2">
              <div className="amq__gu__title flex items-center justify-between text-lg font-medium">
                <div className="amq__gu__title__name">
                  <p>Griffith University</p>
                  <a
                    href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderCode=00233E"
                    target="_blank"
                    className="flex items-center gap-0.5 text-xs font-extralight underline"
                  >
                    CRICOS: 00233E <HiExternalLink />
                  </a>
                </div>
                <p className="amq__gu__title__year text-accent">2019 - 2022</p>
              </div>
              <ul className="amq__gu__content">
                <li>• Bachelor of Information Technology</li>
                <li>• Awarded with Distinction GPA: 6.83 / 7</li>
                <li className="[&>a]:ml-1.5 [&>a]:inline-flex [&>a]:items-center [&>a]:gap-0.5 [&>a]:underline">
                  • Awarded for Academic Excellence in:
                  <a
                    href="https://www.credly.com/badges/295dfe3f-f2f0-4a3b-ae0a-f0acb3824c9c/"
                    target="_blank"
                  >
                    2019 <HiExternalLink className="text-sm" />
                  </a>
                  <a
                    href="https://www.credly.com/badges/87f3870c-20a6-47ab-b565-7202dc077208/"
                    target="_blank"
                  >
                    2020 <HiExternalLink className="text-sm" />
                  </a>
                  <a
                    href="https://www.credly.com/badges/f6977589-9622-4dd3-9d50-53289877830d/"
                    target="_blank"
                  >
                    2022 <HiExternalLink className="text-sm" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="amq__cert space-y-2">
              <p className="amq__cert__title text-lg font-medium">
                Certifications
              </p>
              <ul className="amq__cert__content font-medium [&>li]:flex [&>li]:justify-between [&>a]:[&>li]:text-accent">
                <li>
                  <p>• PTE Academic</p> <a>Score: 90 - 03/2023</a>
                </li>
                <li>
                  <p>• IELTS Academic</p> <a>Score: 8.0 - 06/2017</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
