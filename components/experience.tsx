'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : '#FFFFFF10',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem ',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #808185'
                    : '0.4rem solid #f3f4f6',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                borderColor: 'red',
                background: theme === 'light' ? '#f3f4f6' : '#F3F4F66E',
                fontSize: '1.5rem',
                color: '#1e293b',
              }}>
              <h3 className='font-bold capitalize'>{item.title}</h3>
              <p className='!font-extralight !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal tracking-wide  text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
