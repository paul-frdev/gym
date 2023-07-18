import React from 'react'
import { Button } from './ul/button'
import { Container } from './ul/container'


const sections = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about-us'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Trainers',
    href: '/trainers'
  },
  {
    name: 'Prices',
    href: '/prices'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
]

export const Navbar = () => {
  return (
    <div className='bg-black text-white'>
      <Container className='flex items-center justify-between px-4 py-2'>
        <h1 className='text-6xl font-logo font-bold' >Fit <span className='text-primary'>Zone</span></h1>
        <nav>
          <ul className='flex items-center justify-between gap-x-4 text-md uppercase'>
            {sections.map((section: any) => (
              <li className='cursor-pointer hover:text-primary transition' key={section.name}>
                <a href={section.href}>{section.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button>Join Us</Button>
      </Container>
    </div>
  )
}
