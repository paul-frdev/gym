import React from 'react'
import { Container } from './ul/container'
import { GridContainer } from './ul/gridContainer'
import { Title } from './ul/title'
import { Subtitle } from './ul/subtitle'
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'
import { sections } from '../constants'
import { SubmitForm } from './forms/submitForm'
export const Footer = () => {
  return (
    <div className='bg-black'>
      <Container>
        <GridContainer className=' grid-cols-7 py-8'>
          <div className='col-span-3'>
            <Title className='text-white text-left mb-4' title='About' />
            <Subtitle className='text-white text-left mb-6' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis eaque vero nam aperiam neque, unde, harum error saepe laboriosam libero expedita necessitatibus quaerat facilis explicabo porro! Molestias, rerum excepturi!' />
            <div className='flex justify-between items-center gap-4 max-w-[200px]'>
              <div className='bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition'>
                <a href="/">
                  <FacebookIcon color='#fff' size={25} />
                </a>
              </div>
              <div className='bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition'>
                <a href="/">
                  <InstagramIcon color='#fff' size={25} />
                </a>
              </div>
              <div className='bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition'>
                <a href="/">
                  <TwitterIcon color='#fff' size={25} />
                </a>
              </div>
              <div className='bg-primary rounded-md  hover:bg-transparent hover:border-2 hover:border-white w-[35px] h-[35px] flex items-center justify-center transition'>
                <a href="/">
                  <LinkedinIcon color='#fff' size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className=' col-start-4 col-end-6 ml-8'>
            <Title className='text-white text-left mb-2' title='Quick links' />
            <ul className='flex flex-col items-start justify-between gap-x-4 text-[1.2rem]'>
              {sections.map((section: any) => (
                <li className='text-white cursor-pointer hover:text-primary transition text-left p-2' key={section.name}>
                  <a href={section.href}>{section.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className=' col-start-6 col-end-8'>
            <Title title='Newsletter' className='text-left text-white mb-4' />
            <Subtitle className='text-white text-left mb-6' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis' />
            <div>
              <SubmitForm />
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  )
}
