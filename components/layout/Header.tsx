import React from 'react'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/lib/constant'
import { GithubIcon, Linkedin } from 'lucide-react'
import { ModeToggle } from '../theme-toogle'

const Header = () => {
  return (
    <header className='w-full p-5 flex justify-end items-center gap-4 mt-10'>
      <div className='flex flex-row gap-4 items-center'>
        <Link href={SOCIAL_LINKS.MEDIUM.link} target='_blank'>Blogs</Link>
        <Link href={SOCIAL_LINKS.GITHUB.link} target='_blank' className='flex flex-row gap-1 items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
          <GithubIcon className='h-5 w-5 hover:text-primary' />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN.link} target='_blank' className='flex flex-row gap-1 items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
          <Linkedin className='h-5 w-5 hover:text-primary' />
        </Link>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header