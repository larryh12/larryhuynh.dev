import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SideBtns = () => {
  return (
    <>
      <li>
        <a
          aria-label="email"
          href="mailto:larry.huynh.dev@outlook.com"
          target="_blank"
        >
          <FaEnvelope />
        </a>
      </li>
      <li>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/larry-huynh-dev"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          aria-label="github"
          href="https://github.com/larryh12"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
    </>
  );
};

export default SideBtns;
