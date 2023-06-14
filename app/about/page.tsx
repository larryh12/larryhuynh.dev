import About from '@/components/About';
import Experience from '@/components/Experience';
import { useMeta } from '@/lib/fetchGitHub';
import React from 'react';

const AboutPage = async () => {
  const meta = await useMeta();

  return (
    <>
      <About
        hello={meta.hello}
        qual={meta.qual}
        cert={meta.cert}
        tech={meta.tech}
      />
      <Experience exp={meta.exp} />
    </>
  );
};

export default AboutPage;
