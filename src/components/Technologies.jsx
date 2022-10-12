import React from 'react'
import CardsTechnologies from './CardsTechnologies'
import { FaReact,FaHtml5,FaJs,FaCss3Alt,FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Technologies = () => {
  return (
    <div className='mx-auto mt-10 bg-white p-8'>
    <div className='text-gray-800 text-center'>
        <div className='text-4xl p-10'>Technologies</div>
        <div className='flex gap-20 justify-center'>
            <CardsTechnologies title="HTML 5" icono={<FaHtml5 className='w-20 h-32 text-blue-500'/>}/>
            <CardsTechnologies title="JavaScript" icono={<FaJs className='w-20 h-32 text-yellow-500'/>}/>
            <CardsTechnologies title="Css 3" icono={<FaCss3Alt className='w-20 h-32 text-orange-500'/>}/>
        </div>
        <div className='text-4xl p-10'>Frameworks</div>
        <div className='flex gap-20 justify-center'>
            <CardsTechnologies title="Vue" icono={<FaVuejs className='w-20 h-32 text-green-500'/>}/>
            <CardsTechnologies title="React" icono={<FaReact className='w-20 h-32 text-sky-500'/>}/>
            <CardsTechnologies title="Tailwind" icono={<SiTailwindcss className='w-20 h-32 text-cyan-500'/>}/>
        </div>
    </div>
    </div>
  )
}

export default Technologies