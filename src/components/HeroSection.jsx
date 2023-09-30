import React from 'react'

const HeroSection = () => {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-28'>
   <div className=' text-center'>
    <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold font-japanese dark:text-indigo-500'>Hi, Iam Jawir</h1>
    <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"</p>
    <a href='#works' className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>Recent Work</a>
   </div>
    </div>
  )
}

export default HeroSection