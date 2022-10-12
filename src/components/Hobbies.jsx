import React from 'react'

const Hobbies = () => {
  return (
    <div className='flex flex-row w-full'>
        <div className='basis-3/4 p-32'>
            <h1 className='text-2xl text-center text-white'>Hobbies</h1>
            <p className='text-white text-justify mt-4'>
                I Like the sports, my favorite sport is the basketball.
                I participate in the univesity team of basketball and i love the teamwork.
            </p>
        </div>
        <div className='basketball basis-1/4 h-20 mt-2'>
            <div className='ball'>
                <div className='lines'></div>
            </div>
            <div className='shadow'></div>
        </div>
    </div>
  )
}

export default Hobbies