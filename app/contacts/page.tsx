import Contacts from '@/components/Contacts';
import { useMeta } from '@/lib/fetchGitHub';
import React from 'react';

const ContactsPage = async () => {
  const meta = await useMeta();

  return <Contacts links={meta.links} />;
};

export default ContactsPage;
