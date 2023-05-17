import React from 'react';

import { FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import {
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandPython,
} from 'react-icons/tb';

const About = () => {
  return (
    <section id="about" className="flex min-h-screen items-center">
      <div className="about__wrapper flex flex-col">
        <div className="about__heading text-center">
          <div className="inline-block bg-gradient-to-r from-rp-rose to-rp-pine bg-clip-text text-center text-2xl font-bold text-transparent">
            <span>About</span>
            <div className="h-0.5 bg-gradient-to-r from-rp-rose to-rp-pine" />
          </div>
        </div>

        <div className="about__main flex flex-col space-y-8 md:flex-row md:space-x-8">
          <div className="about__main__quotes flex-1 space-y-4">
            <FaQuoteLeft className="text-xl" />
            <div>👋 Hi there, I&apos;m Larry.</div>
            <div>
              🇦🇺 I&apos;m a software engineering graduate based in Queensland,
              Australia.
            </div>
            <div>
              🔥 I enjoy learning about technology and science. I&apos;m also an
              avid problem solver, aspired to develop highly performant
              solutions that focus on scalability and availability.
            </div>
            <div className="about__main__quotes__skills">
              <div>💻 I&apos;m currently learning:</div>
              <div className="flex flex-wrap [&>div]:m-1 [&>div]:flex [&>div]:cursor-pointer [&>div]:items-center [&>div]:space-x-1 [&>div]:rounded-xl [&>div]:bg-rp-overlay [&>div]:px-2 [&>div]:py-1 [&>div]:text-sm [&>div]:transition hover:[&>div]:scale-105 hover:[&>div]:bg-rp-highmed">
                <div>
                  <TbBrandReact /> <span>React</span>
                </div>
                <div>
                  <TbBrandNextjs /> <span>Next.js</span>
                </div>
                <div>
                  <TbBrandTailwind /> <span>Tailwind CSS</span>
                </div>
                <div>
                  <TbBrandJavascript /> <span>JavaScript</span>
                </div>
                <div>
                  <TbBrandTypescript /> <span>TypeScript</span>
                </div>
                <div>
                  <TbBrandPython /> <span>Python</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__main__divider hidden w-0.5 bg-gradient-to-b from-rp-rose to-rp-pine md:block" />

          <div className="about__main__bg flex-1 space-y-4">
            <div className="about__main__bg__qual space-y-4">
              <div className="text-xl font-semibold">Qualifications</div>
              <div className="ambq__gu space-y-2">
                <div className="ambq__gu__title flex items-center justify-between text-lg font-medium">
                  <div className="ambq__gu__title__name">
                    <div>Griffith University</div>
                    <a
                      href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderCode=00233E"
                      target="_blank"
                      className="flex items-center space-x-1 text-xs text-rp-subtle underline"
                    >
                      <span>CRICOS: 00233E</span> <FaExternalLinkAlt />
                    </a>
                  </div>
                  <div className="ambq__gu__title__year text-rp-gold">
                    (2019 - 2022)
                  </div>
                </div>
                <div className="ambq__gu__content">
                  <div>• Bachelor of Information Technology</div>
                  <div>• Awarded with Distinction GPA: 6.83 / 7</div>
                  <div>
                    <div>• Awarded for Academic Excellence</div>
                    <div className="flex space-x-2 [&>a]:flex [&>a]:items-center [&>a]:space-x-1 [&>a]:underline">
                      <a
                        href="https://www.credly.com/badges/295dfe3f-f2f0-4a3b-ae0a-f0acb3824c9c/"
                        target="_blank"
                      >
                        <span>2019</span> <FaExternalLinkAlt />
                      </a>
                      <a
                        href="https://www.credly.com/badges/87f3870c-20a6-47ab-b565-7202dc077208/"
                        target="_blank"
                      >
                        <span>2020</span> <FaExternalLinkAlt />
                      </a>
                      <a
                        href="https://www.credly.com/badges/f6977589-9622-4dd3-9d50-53289877830d/"
                        target="_blank"
                      >
                        <span>2022</span> <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__main__bg__cert space-y-4">
              <div className="text-xl font-semibold">Certifications</div>
              <div className="about__main__bg__cert__content space-y-2 [&>div]:flex [&>div]:justify-between [&>a]:[&>div]:text-rp-gold">
                <div>
                  <div>PTE Academic</div> <a>Score: 90 · Mar 2023</a>
                </div>
                <div>
                  <div>IELTS Academic</div> <a>Score: 8.0 · Jun 2017</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
