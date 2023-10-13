import React from 'react';

const WorkItem = ({ imgUrl, title, tech, workUrl }) => {
  return (
    <a
      href={workUrl}
      className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden transform hover:-translate-y-8 transition p-5'
    >
      <img
        src={imgUrl}
        alt={title}
        className='w-full h-36 md:h-48 object-cover'
      />
      <div className=' text-gray-600 dark:text-gray-300 p-5 w-full'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
          {title}
        </h3>
        <p className='flex flex-wrap justify-start gap-2 items-center flex-row text-xs md:text-sm'>
          {tech.map((item) => (
            <span
              key={item}
              className='inline-block py-1 rounded-md px-2 bg-slate-200 dark:bg-slate-900'
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default WorkItem;
