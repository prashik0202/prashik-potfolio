import { Code2 } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { PROJECT } from '@/lib/constant'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className='p-5 mt-10'>
      <h2 className='text-2xl font-semibold flex items-end gap-2'>Personal Projects <Code2 className='text-primary' /></h2>
      <div className='flex flex-col gap-2 mt-5'>
        {PROJECT.map((proj) => (
          <Card className='border shadow-none' key={proj.id}>
            <CardHeader>
              <CardTitle>
                {proj.title}
                <Link href={proj.link} className='ml-2 text-sm font-light underline underline-offset-2'>Github</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className='mt-5 text-sm text-muted-foreground'>
              {proj.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects