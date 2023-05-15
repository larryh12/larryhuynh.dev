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
          <div>👋 Hi there, I&apos;m Larry.</div>
          <div>
            🇦🇺 I&apos;m a software engineering graduate based in Queensland,
            Australia.
          </div>
          <div>
            🔥 I enjoy learning about technology and science. I&apos;m also an
            avid problem solver, aspired to develop highly performant solutions
            that focus on scalability and availability.
          </div>
          <div>
            💻 I&apos;m currently learning:
            <div className="mt-1 flex flex-wrap [&>div]:m-1 [&>div]:flex [&>div]:cursor-pointer [&>div]:flex-row [&>div]:rounded-xl [&>div]:bg-rp-overlay [&>div]:px-2 [&>div]:py-1 [&>div]:text-sm">
              <div className="hover:bg-rp-highmed">
                <TbBrandReact className="pt-1 text-base" /> React
              </div>
              <div className="hover:bg-rp-highmed">
                <TbBrandNextjs className="pt-1 text-base" />
                Next.js
              </div>
              <div className="hover:bg-rp-highmed">
                <TbBrandTailwind className="pt-1 text-base" />
                Tailwind CSS
              </div>
              <div className="hover:bg-rp-highmed">
                <TbBrandJavascript className="pt-1 text-base" />
                JavaScript
              </div>
              <div className="hover:bg-rp-highmed">
                <TbBrandTypescript className="pt-1 text-base" />
                TypeScript
              </div>
              <div className="hover:bg-rp-highmed">
                <TbBrandPython className="pt-1 text-base" />
                Python
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12 hidden w-0.5 bg-gradient-to-b from-rp-rose to-rp-pine md:block"></div>
        <div className="flex-1">
          <div className="my-2 mt-4 text-lg font-semibold">Qualifications</div>
          <div className="flex justify-between text-base font-medium">
            Griffith University
            <span className="text-rp-gold">(2019 - 2022)</span>
          </div>
          <a
            href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderCode=00233E"
            target="_blank"
            className="mb-2 flex flex-row text-xs text-rp-subtle underline"
          >
            CRICOS: 00233E <FaExternalLinkAlt className="ml-1" />
          </a>
          <div className="[&>div]:my-1">
            <div>• Bachelor of Information Technology</div>
            <div>• Awarded with Distinction GPA: 6.83 / 7</div>
            <div>
              • Awarded for Academic Excellence
              <br />
              <a
                href="https://www.credly.com/badges/295dfe3f-f2f0-4a3b-ae0a-f0acb3824c9c/"
                target="_blank"
                className="mx-1 underline"
              >
                2019 <FaExternalLinkAlt className="inline text-sm" />
              </a>
              <a
                href="https://www.credly.com/badges/87f3870c-20a6-47ab-b565-7202dc077208/"
                target="_blank"
                className="mx-1 underline"
              >
                2020 <FaExternalLinkAlt className="inline text-sm" />
              </a>
              <a
                href="https://www.credly.com/badges/f6977589-9622-4dd3-9d50-53289877830d/"
                target="_blank"
                className="mx-1 underline"
              >
                2022 <FaExternalLinkAlt className="inline text-sm" />
              </a>
            </div>
          </div>
          <div className="my-2 mt-8 text-lg font-semibold">Certifications</div>
          <div className="my-2 flex justify-between text-base font-medium">
            PTE Academic
            <span className="text-rp-gold">Score: 90 · Mar 2023</span>
          </div>
          <div className="my-2 flex justify-between text-base font-medium">
            IELTS Academic
            <span className="text-rp-gold">Score: 8.0 · Jun 2017</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
