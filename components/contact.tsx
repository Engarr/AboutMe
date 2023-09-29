'use client';

import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      className='scroll-mt-28 mb-28 w-[min(100%,38rem)]'
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:lukasz.poczta12@gmail.com'>
          lukasz.poczta12@gmail.com
        </a>{' '}
        or using this form.
      </p>
      <form
        className='flex flex-col mt-10 '
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
        }}>
        <input
          type='email'
          className='h-14 rounded-lg border borderBlack px-4'
          placeholder='Your email'
          required
          maxLength={500}
          name='senderEmail'
        />
        <textarea
          className='borderBlack min-h-[15rem] my-3 rounded-lg p-4 px-4'
          placeholder='Your message'
          required
          maxLength={5000}
          name='message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
