import React from 'react';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';
import works from '../data/works';

function Works() {
  return (
    <div id='work' className='py-12'>
      <SectionTitle id='works'>Recent Works</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 transform hover:-translate-y-2 transition p-5'>
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
