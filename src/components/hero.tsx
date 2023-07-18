import React from 'react'
import { Container } from './ul/container'
import { Button } from './ul/button'

export const Hero = () => {
  return (
    <div className='bg-[url("https://www.titan.fitness/on/demandware.static/-/Sites-TitanFitness-Library/default/dw5363c00d/homepage-images/bottom-promotion-banner-mobile.webp")] relative bg-no-repeat h-[70vh] w-screen object-cover object-center flex justify-center'>
      <div className='absolute top-0 left-0 bg-black opacity-70 h-[70vh] w-screen'></div>
      <div className='text-white z-20 flex flex-col items-center h-full w-full gap-4 justify-center text-center'>
        <h2 className='text-5xl font-semibold'>Unlock Your Potential, Embrace the Challenge</h2>
        <p className='text-lg'>Empower Your Body, Elevate Your Life</p>
        <Button className='border-none hover:border-primary hover:border-1'>Join Us</Button>
      </div>
    </div>
  )
}
