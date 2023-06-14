import React from 'react';

export const metadata = {
  title: 'larryhuynh.dev | About',
  description: "Larry Huynh's Personal Website",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default AboutLayout;
