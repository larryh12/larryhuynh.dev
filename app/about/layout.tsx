import React from 'react';

export const metadata = {
  title: 'About - larryhuynh.dev',
  description: "Larry Huynh's Personal Website",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <> {children} </>;
};

export default layout;
