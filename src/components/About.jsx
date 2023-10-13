import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12'>
        <SectionTitle>Abote Me</SectionTitle>
        <p className='text-md text-slate-600 dark:text-slate-300'>
          "Saya seorang Front-End Engineer pemula yang berkomitmen mengubah
          desain menjadi pengalaman pengguna yang menarik. Saya memiliki dasar
          dalam HTML, CSS, JavaScript, dan React.js, serta mampu berkolaborasi
          dalam tim untuk menciptakan antarmuka responsif. Saya selalu
          bersemangat untuk belajar, berkembang, dan berkontribusi dalam proyek
          tim.".
        </p>
        <a
          className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline dark:hover:text-indigo-500 hover:text-indigo-600'
          href='mailto:hadzipamuji5@gmail.com'
        >
          hadzipamuji5@gmail.com
        </a>
      </div>
      <img
        src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DZmNfcrlIupLbyRT-1DaMAHaEK%26pid%3DApi&f=1&ipt=56dbead73134fe4fd9ebd57906d8dfba084b90c6d89375bee71dead0c22e41aa&ipo=images'
        alt='kurumi'
        className='w-full md:w-6/12 rounded-lg object-cover'
      />
    </div>
  );
};

export default About;
