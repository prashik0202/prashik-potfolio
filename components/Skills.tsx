import { SKILLS } from '@/lib/constant'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <section className='p-5 mt-10'>
      <h2 className='text-2xl font-semibold flex items-end gap-2'>Skills</h2>
      <div className='grid grid-cols-3 md:grid-cols-5 gap-2 mt-5'>
        {
          SKILLS.map((skill) => (
            <div key={skill.id} className='border flex flex-col items-center justify-between gap-2 p-2 rounded-md'>
              <Image 
                src={skill.iconsBlack} 
                alt={skill.label} 
                height={40} 
                width={40} 
                className='block dark:hidden'
              />
              <Image 
                src={skill.iconsWhite} 
                alt={skill.label} 
                height={40} 
                width={40}
                className='hidden dark:block'
              />
              <span>{skill.label}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills