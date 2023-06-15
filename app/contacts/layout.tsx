import React from 'react';

export const metadata = {
  title: 'Contacts - larryhuynh.dev',
  description: "Larry Huynh's Personal Website",
};

const ContactsLayout = ({ children }: { children: React.ReactNode }) => {
  return <> {children} </>;
};

export default ContactsLayout;
