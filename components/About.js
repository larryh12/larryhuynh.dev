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
    <section id="about" className="flex flex-col py-8">
      <div className="mb-8 text-center">
        <div className="inline-block bg-gradient-to-r from-rp-rose to-rp-pine bg-clip-text text-center text-2xl font-bold text-transparent">
          About
          <div className="h-0.5 bg-gradient-to-r from-rp-rose to-rp-pine" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 [&>*]:my-4">
          <FaQuoteLeft className="text-xl" />
          <div>👋 Hi there, I'm Larry.</div>
          <div>
            🇦🇺 I'm a software engineering graduate based in QLD, Australia.
          </div>
          <div>
            🔥 I enjoy learning about technology and science. I'm also an avid
            problem solver, aspired to develop highly performant solutions that
            focus on scalability and availability.
          </div>
          <div>
            💻 Currently I'm learning:
            <div className="mt-1 flex flex-wrap [&>div]:m-1 [&>div]:flex [&>div]:cursor-pointer [&>div]:flex-row [&>div]:rounded-xl [&>div]:bg-rp-overlay [&>div]:px-2 [&>div]:py-1 [&>div]:text-sm [&>div]:hover:bg-rp-highmed">
              <div className="">
                <TbBrandReact className="pt-1 text-base" /> React
              </div>
              <div className="">
                <TbBrandNextjs className="pt-1 text-base" />
                Next.js
              </div>
              <div className="">
                <TbBrandTailwind className="pt-1 text-base" />
                Tailwind CSS
              </div>
              <div className="">
                <TbBrandJavascript className="pt-1 text-base" />
                JavaScript
              </div>
              <div className="">
                <TbBrandTypescript className="pt-1 text-base" />
                TypeScript
              </div>
              <div className="">
                <TbBrandPython className="pt-1 text-base" />
                Python
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 hidden w-0.5 bg-gradient-to-b from-rp-rose to-rp-pine md:block"></div>
        <div className="flex-1">
          <div className="mb-2 mt-4 text-lg font-semibold">Qualifications</div>
          <div className="mt-2 flex justify-between text-base font-medium">
            Griffith University
            <span className="text-rp-gold">(2019 - 2022)</span>
          </div>
          <a
            href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderCode=00233E"
            target="_blank"
            className="flex flex-row text-xs text-rp-subtle"
          >
            CRICOS: 00233E <FaExternalLinkAlt className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
