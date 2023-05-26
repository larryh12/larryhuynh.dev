import React from 'react';

import Image from 'next/image';
import flixx from '@/public/proj/flixx.png';
import metaversus from '@/public/proj/metaversus.png';
import hoobank from '@/public/proj/hoobank.png';
import gpt3 from '@/public/proj/gpt3.png';

import { SiGithub } from 'react-icons/si';

const Projects = () => {
  return (
    <section id="projects" className="flex px-8 py-16">
      <div className="projects__wrapper m-auto flex flex-col">
        <div className="projects__heading text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold text-transparent">
            <p>Projects</p>
            <div className="h-0.5 bg-gradient-to-r from-primary to-secondary" />
          </div>
        </div>

        <div className="project__main space-y-16 pt-8">
          <div className="project__main__apps space-y-8">
            <p className="pma__head text-center text-xl font-semibold">
              Web Apps
            </p>
            <div className="pma__body grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="card-normal card static bg-neutral shadow-2xl">
                <figure>
                  <a target="_blank" href="https://flixx-larryh12.vercel.app/">
                    <Image
                      src={flixx}
                      alt="flixx"
                      className="transition hover:scale-105"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">FLIXX</h2>
                  <ul className="flex flex-wrap gap-2">
                    <li className="badge badge-info">HTML</li>
                    <li className="badge badge-success">CSS</li>
                    <li className="badge badge-warning">JavaScript</li>
                    <li className="badge badge-error">REST API</li>
                  </ul>
                  <p>
                    Interactive web app for trending Movie, TV Show, and Anime
                    info from TheMovieDB and MyAnimeList.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/flixx-app"
                      target="_blank"
                      href="https://github.com/larryh12/flixx-app"
                      className="btn-outline btn gap-2"
                    >
                      <SiGithub />
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project__main__uiux space-y-8">
            <p className="pmu__head text-center text-xl font-semibold">UI/UX</p>
            <div className="pmu__body grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="card-normal card static bg-neutral shadow-2xl">
                <figure>
                  <a
                    target="_blank"
                    href="https://metaversus-larryh12.vercel.app/"
                  >
                    <Image
                      src={metaversus}
                      alt="metaversus"
                      className="transition hover:scale-105"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">METAVERSUS</h2>
                  <ul className="flex flex-wrap gap-2">
                    <li className="badge badge-info">Next.js</li>
                    <li className="badge badge-success">React</li>
                    <li className="badge badge-warning">Tailwind CSS</li>
                    <li className="badge badge-error">Framer Motion</li>
                  </ul>
                  <p>
                    Re-creation of a modern front-end web design with the theme
                    of the Metaverse.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/metaversus-ui"
                      target="_blank"
                      href="https://github.com/larryh12/metaversus-ui"
                      className="btn-outline btn gap-2"
                    >
                      <SiGithub />
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-normal card static bg-neutral shadow-2xl">
                <figure>
                  <a
                    target="_blank"
                    href="https://hoobank-larryh12.vercel.app/"
                  >
                    <Image
                      src={hoobank}
                      alt="hoobank"
                      className="transition hover:scale-105"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">HooBank</h2>
                  <ul className="flex flex-wrap gap-2">
                    <li className="badge badge-info">Next.js</li>
                    <li className="badge badge-success">React</li>
                    <li className="badge badge-warning">Tailwind CSS</li>
                  </ul>
                  <p>
                    Re-creation of a modern front-end web design for a digital
                    payment service website.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/hoobank-ui"
                      target="_blank"
                      href="https://github.com/larryh12/hoobank-ui"
                      className="btn-outline btn gap-2"
                    >
                      <SiGithub />
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-normal card static bg-neutral shadow-2xl">
                <figure>
                  <a target="_blank" href="https://gpt3-larryh12.vercel.app/">
                    <Image
                      src={gpt3}
                      alt="gpt3"
                      className="transition hover:scale-105"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">GPT-3</h2>
                  <ul className="flex flex-wrap gap-2">
                    <li className="badge badge-info">Next.js</li>
                    <li className="badge badge-success">React</li>
                    <li className="badge badge-warning">Tailwind CSS</li>
                  </ul>
                  <p>
                    Re-creation of a modern front-end web design with the
                    concept of OpenAI&apos;s GPT-3.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/gpt3-ui"
                      target="_blank"
                      href="https://github.com/larryh12/gpt3-ui"
                      className="btn-outline btn gap-2"
                    >
                      <SiGithub />
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
