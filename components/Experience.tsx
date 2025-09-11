import { EXPERIENCE_INFO } from '@/lib/constant'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Laptop } from 'lucide-react'

const Experience = () => {
  return (
    <section className='p-5 mt-10'>
      <h2 className='text-2xl font-semibold flex gap-2 items-center'>Experience <Laptop /></h2>
      {
        EXPERIENCE_INFO.map((exp) => (
          <Card className='border shadow-none mt-5' key={exp.id}>
            <CardHeader>
              <CardTitle>
                {exp.title}
              </CardTitle>
              <CardDescription className='flex flex-col md:flex-row  md:gap-2'>
                <span>
                  {exp.position}
                </span>
                <span>
                  {exp.timeLine}
                </span>
              </CardDescription>
              <CardContent className='flex flex-col gap-10 mt-4'>
                {exp.projects.map((proj) => (
                  <div key={proj.id} className='flex flex-col gap-1'>
                    <span className='font-bold text-md underline underline-offset-4'>{proj.name}</span>
                    <p className='text-sm text-muted-foreground'>{proj.description}</p>
                    <p className='font-bold text-sm text-primary'>{proj.techUsed}</p>
                  </div>
                ))}
              </CardContent>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>
        ))
      }
    </section>
  )
}

export default Experience