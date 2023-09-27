import React from 'react';

type PropsType = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: PropsType) => {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center '>
      {children}
    </h2>
  );
};

export default SectionHeading;
