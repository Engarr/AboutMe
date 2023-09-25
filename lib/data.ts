import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import windmillImg from '@/public/assets/images/windmill.png';
import gametrove from '@/public/assets/images/gametrove.png';

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
    title: 'Courses',
    location: 'Rzeszów, Poland',
    description:
      'Over the course of a year, I completed Frontend courses on the Udemy platform.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'WindMill',
    description:
      'I was working on my own project of an imaginary store that sells products in the grain department.',
    tags: ['React', 'Express', 'MongoDB', 'TypeScript', 'Redux'],
    imageUrl: windmillImg,
  },
  {
    title: 'GameTrove',
    description: 'A gaming website featuring games from the IGDB database.',
    tags: ['React', 'Express', 'MongoDB', 'TypeScript', 'Redux'],
    imageUrl: gametrove,
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
