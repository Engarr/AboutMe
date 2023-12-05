import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import windmillImg from '@/public/windmill.png';
import gametrove from '@/public/gametrove.png';
import roadAssistand from '@/public/roadAssistant.png';
import gymAssistant from '@/public/gymAssistant.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Education',
    location: 'Rzeszów, Poland',
    description: 'I graduated after 3,5 years of studying.',
    icon: React.createElement(LuGraduationCap),
    date: '10.2014 - 02.2018',
  },
  {
    title: 'Company Owner',
    location: 'Rzeszów, Poland',
    description:
      'Operating an e-commerce platform, which encompasses the entire spectrum of tasks involved in managing an online shop, such as crafting a comprehensive product catalog, managing orders, and providing post-purchase customer support.',
    icon: React.createElement(CgWorkAlt),
    date: '2016-present',
  },
  {
    title: 'Courses',
    location: 'Rzeszów, Poland',
    description:
      'Over the course of a year, I completed Frontend courses on the Udemy platform.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'WindMill',
    description:
      'I worked on my own full-stack project of an imaginary store that sells products in the grain department.',
    tags: ['React', 'Express', 'MongoDB', 'TypeScript', 'Redux'],
    imageUrl: windmillImg,
    demo: 'https://windmill-app.vercel.app/',
  },
  {
    title: 'GameTrove',
    description: 'A gaming website featuring games from the IGDB database.',
    tags: ['React', 'Express', 'MongoDB', 'TypeScript', 'Redux'],
    imageUrl: gametrove,
    demo: 'https://game-trove-app.vercel.app/',
  },
  {
    title: 'TRANSWOS - Roadside assistance page',
    description: 'Website of a company providing roadside assistance.',
    tags: ['Next.js', 'TypeScript', 'Frame motion'],
    imageUrl: roadAssistand,
    demo: 'https://roadside-assistance-website.vercel.app/',
  },
  {
    title: 'Gym-Assistant',
    description:
      'Web application to manage your progress in the gym - application under development',
    tags: ['Next.js', 'TypeScript', 'Frame motion', 'MongoDB'],
    imageUrl: gymAssistant,
    demo: 'https://project-x-engarr.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'Framer Motion',
] as const;
