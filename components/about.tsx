'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        During studies in <span className='font-medium'>Logistic</span>, I
        decided to my own company dealing with eccommers. After few years I
        tryied to change something in my life so i decided to start to lear{' '}
        <span className='font-medium'>programing</span>. Everything what i know
        i have been learn by myself from Youtube or Udemy courses. Since 2022
        until now. My core stack is{' '}
        <span className='font-medium'>
          Java Script, React (Redux, Router), Node.js, CSS, HTML.{' '}
        </span>
        I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{' '}
        <span className='font-bold'>full-time position</span> as a software
        developer to fully enter the{' '}
        <span className='font-medium'>world of programming.</span>
      </p>

      <p>
        Beside of programin i enjoy{' '}
        <span className='font-medium'>playing video games</span>,
        <span className='font-medium'>watching movies</span>, or{' '}
        <span className='font-medium'>work out at the gym</span>
      </p>
    </motion.section>
  );
};

export default About;
