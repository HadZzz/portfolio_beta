import React from 'react'

const ServiceItem = ({title, icon, description}) => {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 transform hover:-translate-y-2 transition p-5'>
      <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
        {icon}
      </div>
      <h1 className='text-slate-600 font-semibold text-lg dark:text-slate-300 mb-3'>{title}</h1>
      <p className='text-md text-slate-600 dark:text-slate-300'>{description}</p>
    </div>
  )
}

export default ServiceItem