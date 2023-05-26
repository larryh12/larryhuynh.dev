import React from 'react';

import Image from 'next/image';
import flixxapp from '@/public/proj/flixxapp.png';
import metaversussite from '@/public/proj/metaversussite.png';
import hoobanksite from '@/public/proj/hoobanksite.png';
import gptsite from '@/public/proj/gptsite.png';

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
                  <a
                    target="_blank"
                    href="https://flixx-app-larryh12.vercel.app/"
                  >
                    <Image
                      src={flixxapp}
                      alt="flixxapp"
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
                    href="https://metaversus-site-larryh12.vercel.app/"
                  >
                    <Image
                      src={metaversussite}
                      alt="metaversussite"
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
                    Re-creation of a modern front-end UI/UX web design with the
                    theme of the Metaverse.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/metaversus-site"
                      target="_blank"
                      href="https://github.com/larryh12/metaversus-site"
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
                    href="https://hoobank-site-larryh12.vercel.app/"
                  >
                    <Image
                      src={hoobanksite}
                      alt="hoobanksite"
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
                    Re-creation of a modern front-end UI/UX web design with the
                    theme of a digital payment service.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/hoobank-site"
                      target="_blank"
                      href="https://github.com/larryh12/hoobank-site"
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
                    href="https://gpt-site-larryh12.vercel.app/"
                  >
                    <Image
                      src={gptsite}
                      alt="gptsite"
                      className="transition hover:scale-105"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">GPT-3 Website</h2>
                  <ul className="flex flex-wrap gap-2">
                    <li className="badge badge-info">Next.js</li>
                    <li className="badge badge-success">React</li>
                    <li className="badge badge-warning">Tailwind CSS</li>
                  </ul>
                  <p>
                    Re-creation of a modern front-end UI/UX web design with the
                    theme of OpenAI&apos;s GPT model.
                  </p>
                  <div className="card-actions mt-2 justify-end">
                    <a
                      aria-label="https://github.com/larryh12/gpt-site"
                      target="_blank"
                      href="https://github.com/larryh12/gpt-site"
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
