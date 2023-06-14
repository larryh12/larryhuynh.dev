import React from 'react';

export const metadata = {
  title: 'larryhuynh.dev | Contacts',
  description: "Larry Huynh's Personal Website",
};

const ContactsLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default ContactsLayout;
