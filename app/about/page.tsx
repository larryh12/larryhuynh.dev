import About from '@/components/About';
import Experience from '@/components/Experience';
import { getMeta } from '@/lib/github';
import React from 'react';

const page = async () => {
  const meta = await getMeta();

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

export default page;
