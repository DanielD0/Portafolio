import React from 'react'

const CardsTechnologies = (props,) => {
  return (
    <div className='w-52 h-52 bg-white border rounded-lg shadow-md'>
        <div className='flex-col'>
            <div className='h-32 w-full flex justify-center'>
            <div>{props.icono}</div>
            </div>
            <div className='mt-10'>{props.title}</div>
        </div>
    </div>
  )
}

export default CardsTechnologies