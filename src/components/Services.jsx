import React from 'react'
import SectionTitle from './SectionTitle'
import services from '../data/services'
import ServiceItem from '../data/ServiceItem';
const Services
 = () => {
  return (
    <div className='py-12'>
      <SectionTitle>Project</SectionTitle>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl'>
      {services.map(services => (
        <ServiceItem
        key={services.title}
        title={services.title}
        icon={services.icon}
        description={services.description}
        ></ServiceItem>))}
      </div>    
    </div>
  )
}


export default Services