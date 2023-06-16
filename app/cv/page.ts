import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
  redirect('https://google.com');
};

export default page;
