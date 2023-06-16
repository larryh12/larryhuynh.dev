import Contacts from '@/components/Contacts';
import { getMeta } from '@/lib/github';
import React from 'react';

const page = async () => {
  const meta = await getMeta();

  return <Contacts links={meta.links} />;
};

export default page;
