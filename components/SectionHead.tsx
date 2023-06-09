import React from 'react';

const SectionHead = (props: any) => {
  const title = props.title;
  return (
    <div className="prose">
      <div className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text">
        <h1 className="text-transparent">{title}</h1>
      </div>
    </div>
  );
};

export default SectionHead;
