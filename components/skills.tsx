'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.4);

  return (
    <section
      ref={ref}
      id='skills'
      className='scroll-mt-28 mt-5 mb-28 max-w-[53rem] sm:mb-40'>
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className='bg-white px-5 py-3 border border-black/[0.1] rounded-xl'>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
