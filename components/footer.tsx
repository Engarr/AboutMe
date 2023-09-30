import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='z-[999] relative mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        &copy; {year}. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js (App Router & Server Actions) TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
