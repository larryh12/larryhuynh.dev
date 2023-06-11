import React from 'react';

import Image from 'next/image';
import griffith from '@/public/exp/griffith.png';
import aemo from '@/public/proj/aemo.png';

import { HiExternalLink } from 'react-icons/hi';

const Experience = (props: any) => {
  return (
    <section id="experience" className="flex px-8 py-16">
      <div className="experience__wrapper m-auto flex flex-col">
        <div className="experience__heading text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold text-transparent">
            <p>Experience</p>
            <div className="h-0.5 bg-gradient-to-r from-primary to-secondary" />
          </div>

          <div className="experience__main pt-8">
            <div className="experience__main__caeepr space-y-8 text-left">
              <div className="emc__header flex gap-4">
                <div className="m-auto">
                  <Image
                    src={griffith}
                    width={64}
                    height={64}
                    alt="griffith-logo"
                    className=""
                  />
                </div>

                <ul className="flex-1">
                  <li className="text-xl font-semibold">
                    Software Developer @
                  </li>
                  <li>
                    <a
                      href="https://www.griffith.edu.au/griffith-business-school/research/centre-applied-energy-economics-policy-research"
                      target="_blank"
                      className="flex items-center gap-1 text-lg font-medium"
                    >
                      CAEEPR <HiExternalLink />
                    </a>
                  </li>
                  <li className="font-medium text-accent">
                    07/2022 - 11/2022 | Internship
                  </li>
                </ul>
              </div>

              <ul className="emc__content space-y-4">
                <li>
                  • Developed an efficient and effective data extraction tool
                  using Python frameworks for a large-scale data problem in the
                  national electricity market research by AEMO and CAEEPR.
                </li>
                <li>
                  • Enhanced the staff efficiency and productivity by automating
                  the data extraction process, saving up to 80% of time and
                  resources compared to manual methods.
                </li>
                <li>
                  • Improved the data readability and accuracy by 2x by
                  filtering and separating data by type and device identifiers.
                </li>
                <li>
                  • Reduced the data size by 96% by removing duplicated and
                  irrelevant entries, saving up to 70 MB of disk storage per
                  file.
                </li>
                <li>
                  • Provided valuable insights for future research on generator
                  bidding strategies, allowing the staff to analyse and compare
                  different scenarios and outcomes, improving the overall
                  research quality by 3x.
                </li>
                <li>
                  • Received Finalist Place for The Best Innovative Project in
                  Trimester 2, 2022 out of 50 competing projects for delivering
                  a user-friendly application that met the client&apos;s
                  objectives and expectations.
                </li>
              </ul>

              <div className="card card-normal static bg-neutral shadow-2xl sm:card-side">
                <figure>
                  <a
                    target="_blank"
                    href="https://github.com/larryh12/aemo-tool"
                  >
                    <Image
                      src={aemo}
                      alt="aemo"
                      className="h-full object-cover transition hover:scale-105"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">AEMO Data Tool</h2>
                  <p>
                    Australian Energy Market Operator Data Tool - Interactive
                    GUI application that provides data processing and data
                    extraction features for AEMO raw data source.
                  </p>
                  <ul className="card-actions mt-2">
                    <li className="badge badge-outline">Python</li>
                    <li className="badge badge-outline">pandas</li>
                    <li className="badge badge-outline">NumPy</li>
                    <li className="badge badge-outline">openpyxl</li>
                    <li className="badge badge-outline">PySimpleGUI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
