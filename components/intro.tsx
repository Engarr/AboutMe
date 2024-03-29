'use client';

import Image from 'next/image';
import React from 'react';
import profilePhoto from '@/public/profilePhoto.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/activeSection';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.8);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      onClick={() => {
        setActiveSection('Contact');
        setTimeOfLastClick(Date.now());
      }}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      id='home'
      ref={ref}>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}>
            <Image
              src={profilePhoto}
              height='192'
              width='192'
              quality='95'
              priority={true}
              alt='profile_photo'
              className='rounded-full h-24 w-24 object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute text-3xl -bottom-2 -right-3 '
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}>
            💻
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className='font-bold'>Hello, I'm Łukasz.</span> I'm a{' '}
        <span className='font-bold'>frontend developer beginner </span>I have
        been studying <span className='font-bold'>for over a year</span> I enjoy
        building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className='flexCenter flex-col sm:flex-row gap-4 px-4 font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
        <Link
          href='/#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none buttonHover hover:bg-gray-950  transition'>
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none buttonHover  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-gray-200'
          href='/CV.pdf'
          download>
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <div className='flex gap-2'>
          <a
            href='https://www.linkedin.com/in/%C5%82ukasz-wo%C5%9B-6a1970263/'
            target='_blank'
            className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 cursor-pointer border border-black/20 transition dark:bg-white/10 dark:text-gray-200 flexCenter w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem]'>
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/Engarr'
            target='_blank'
            className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 cursor-pointer border border-black/20 transition text-[1.35rem] dark:bg-white/10 dark:text-gray-200 flexCenter w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem]'>
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
