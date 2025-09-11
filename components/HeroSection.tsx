import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className='p-5 flex flex-col gap-1'>
      <div className='flex flex-col lg:flex-row gap-5 lg:items-center'>
        <Image src='/images/me.jpg' alt='me' width={120} height={120} className='rounded-full border-4 border-accent-foreground shadow-2xl'/>
        <div>
          <h1 className='text-2xl'>Prashik Gamre</h1>
          <h2 className='text-xl text-primary mt-1'>Software Developer</h2>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='text-sm text-muted-foreground mt-6'>
          I&apos;m a Software Developer who builds clean, efficient, and scalable applications across the stack.
        </p>
        <p className='text-sm text-muted-foreground'>
          I turn complex problems into simple, reliable solutions that prioritize performance, maintainability, and great user experience.
        </p>
      </div>
    </section>
  )
}

export default HeroSection