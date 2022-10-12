import React from 'react'
import { FaStar } from "react-icons/fa";

const CardsTechnologies = (props,) => {
  return (
    <div className='w-52 h-52 bg-white border rounded-lg shadow-md'>
        <div className='flex-col'>
            <div className='h-32 w-full flex justify-center'>
            <div>{props.icono}</div>
            </div>
            <div className='flex justify-center'>
              <FaStar className='h-8 w-8 text-yellow-500'/>
            </div>
            <div>{props.title}</div>
        </div>
    </div>
  )
}

export default CardsTechnologies