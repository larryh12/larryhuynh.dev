import React from 'react';

const SectionHead = (props: any) => {
  const title = props.title;
  return (
    <div className="w-fit ">
      <h1 className="text-transparent">{title}</h1>
    </div>
  );
};

export default SectionHead;
