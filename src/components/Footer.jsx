import React from 'react';

const Footer = () => {
  return (
    <div className='py-5 bg-slate-800 text-center bg-gray-300 rounded-t-lg'>
      <a
        className='block text-md md:text-2xl text-gray-300 font-semibold text-sm'
        href='#hero'
      >
        Hadzi Pamuji
      </a>
      <a
        href='mailto:hadzipamuji5@gmail.com'
        className='text-regular text-gray-300 text-sm md:text-md hover:text-indigo-600'
      >
        hadzipamuji5@gmail.com
      </a>
      <p className='text-xs font-regular mt-2 text-gray-300'>
        {' '}
        ©️ Mbahhadi {new Date().getFullYear()}. All right reserved{' '}
      </p>
    </div>
  );
};

export default Footer;
