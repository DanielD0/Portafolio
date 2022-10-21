import React from 'react'
import { BsGithub,BsLinkedin } from 'react-icons/bs';

const Profiles = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:flex-col sm:mt-96 '>
      <h2 className='text-white text-4xl text-center'>links</h2>
      <div className='flex flex-row gap-20 mb-10 sm:flex-col  sm:gap-0'>
      <div className='mt-10 sm:flex sm:flex-col'>
        <a href='https://github.com/DanielD0' target="_blank" rel="noreferrer"><BsGithub className='text-white w-20 h-20'/></a>
      </div>
      <div className="mt-10">
        <a href="https://www.linkedin.com/in/daniel-diaz-hernandez-243b51132" target="_blank" rel="noreferrer"><BsLinkedin className='text-white w-20 h-20'/></a>
      </div>
      </div>
    </div>
  )
}

export default Profiles