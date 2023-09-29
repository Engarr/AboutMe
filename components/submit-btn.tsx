import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='group  buttonHover flexCenter gap-2  h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all  hover:bg-gray-950 
      disabled:scale-100 disabled:bg-opacity-65'
      disabled={pending}>
      {pending ? (
        <div className='h-5 w-5 animate-spin border border-b-2  border-b-green-400 rounded-full border-white/20' />
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-[50%] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-[95%]' />
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
