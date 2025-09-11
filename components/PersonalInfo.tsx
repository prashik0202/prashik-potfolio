import { CakeIcon, MapPin, PenBoxIcon } from 'lucide-react'
import React from 'react'

const PersonalInfo = () => {
  return (
    <section className='p-5 flex flex-col gap-1 border-t'>
      <div className='flex flex-wrap items-center gap-2'>
        <span className='flex items-center gap-2 text-sm text-muted-foreground bg-accent w-fit py-1 px-3 rounded-md'><CakeIcon className='h-4 w-4'/> 3 Dec</span>
        <span className='flex items-center gap-2 text-sm text-muted-foreground bg-accent w-fit py-1 px-3 rounded-md'><MapPin  className='h-4 w-4'/>Mumbai, India</span>
        <span className='flex items-center gap-2 text-sm text-muted-foreground bg-accent w-fit py-1 px-3 rounded-md'><PenBoxIcon  className='h-4 w-4'/>Technical Writer</span>
      </div>
    </section>
  )
}

export default PersonalInfo