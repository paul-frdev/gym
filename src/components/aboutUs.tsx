import React from 'react'
import { Container } from './ul/container'
import { Heading } from './ul/heading'

export const AboutUs = () => {
  return (
    <div className='bg-gray-200'>
      <Container className='grid grid-cols-2 items-center gap-x-4 p-8'>
        <div>
          <img className='rounded-md w-[80%] h-[80%]' src='https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg' alt="image" />
        </div>
        <div>
          <Heading title='About Us' />
          <h4 className='text-4xl font-semibold mb-4'>Our fitness Story: Unleashing Your Potential</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut beatae, debitis deleniti veritatis facere placeat sint eos, ipsam voluptates quod quam, nostrum sed maiores! Quas, cupiditate? Vitae iste commodi iusto.
            Error, in est modi nisi ad explicabo molestiae deleniti libero fuga perspiciatis. Nihil est error voluptate perspiciatis ut quibusdam ab nobis asperiores, commodi ipsam, distinctio, rem neque quo corporis? Facere?
          </p>
        </div>
      </Container>
    </div>
  )
}
