'use client';

import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  imageUrl,
  tags,
  demo,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-8 
      last:mb-0 '>
      <section
        className='flex bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden relative 
      sm:pr-8 sm:h-[20rem] 
      sm:group-even:pl-10 hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 '>
        <div
          className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full 
        sm:group-even:ml-[20rem] '>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/75'>
            {description}
          </p>
          <div className='w-full flex text-left font-semibold text-xs capitalize'>
            <a
              target='_blank'
              href={demo}
              className='my-4 py-2 w-[30%] text-center rounded-2xl bg-gray-200 dark:text-white dark:bg-white/20 hover:scale-105 transition hover:bg-gray-100'>
              Try demo
            </a>
          </div>
          <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                key={index}
                className='bg-black/75 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/75 dark:bg-black/40'>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`iimage of ${title} - my project`}
          quality={95}
          className=' hidden sm:block absolute -bottom-4 -right-[30%] w-[29.25rem] h-[85%] rounded-t-lg shadow-2xl 
          transition 
          group-hover:-translate-x-3 
          group-hover:-translate-y-3 
          group-hover:-rotate-2 
          group-hover:scale-[1.04] 
          group-even:-right-[initail] 
          group-even:-left-40 
          group-even:group-hover:translate-x-5 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2 
                   '
        />
      </section>
    </motion.div>
  );
};
export default Project;
