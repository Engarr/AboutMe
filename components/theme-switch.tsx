'use client';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <motion.button
      initial={{
        right: 0,
        opacity: 0,
        bottom: 0,
      }}
      animate={{
        right: 10,
        bottom: 15,
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
      }}
      className='fixed  bg-gray-200 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 flexCenter shadow-2xl rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-white/5 z-[999]'
      onClick={toggleTheme}>
      {theme === 'light' ? <BsSun /> : <BsMoon className='text-white' />}
    </motion.button>
  );
};

export default ThemeSwitch;
