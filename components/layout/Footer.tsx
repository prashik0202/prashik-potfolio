import { SOCIAL_LINKS } from '@/lib/constant'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-wrap items-center gap-5 mt-10 p-5 lg:p-10 border-t'>
      <Link href={SOCIAL_LINKS.GITHUB.link} className='flex gap-2 items-center'>{SOCIAL_LINKS.GITHUB.label}<ExternalLink className='h-4 w-4' /></Link>
      <Link href={SOCIAL_LINKS.LINKEDIN.link} className='flex gap-2 items-center'>{SOCIAL_LINKS.LINKEDIN.label}<ExternalLink className='h-4 w-4' /></Link>
      <Link href={SOCIAL_LINKS.MAIL.link} className='flex gap-2 items-center'>{SOCIAL_LINKS.MAIL.label}<ExternalLink className='h-4 w-4' /></Link>
      <Link href={SOCIAL_LINKS.MEDIUM.link} className='flex gap-2 items-center'>{SOCIAL_LINKS.MEDIUM.label}<ExternalLink className='h-4 w-4' /></Link>
    </div>
  )
}

export default Footer