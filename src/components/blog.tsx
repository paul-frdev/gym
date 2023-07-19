import React from 'react'
import { Heading } from './ul/heading'
import { Title } from './ul/title'
import { Subtitle } from './ul/subtitle'
import { GridContainer } from './ul/gridContainer'
import { Cart } from './ul/cart'
import { Container } from './ul/container'

export const Blog = () => {
  return (
    <div className='mb-20'>
      <Container className='max-w-[1200px]'>
        <Heading title='Our Blog' />
        <Title title='Latest From Our Blog' />
        <Subtitle subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut beatae, debitis deleniti veritatis facere placeat sint eos' />

        <GridContainer>
          <Cart
            src='https://typito.com/_landing-static/images/fitness-trainer/fitness-template-1.webp'
            name='Views'
            position='13/12/2023'
          />
          <Cart
            src='https://typito.com/_landing-static/images/fitness-trainer/fitness-template-1.webp'
            name='Views'
            position='13/12/2023'
          />
          <Cart
            src='https://typito.com/_landing-static/images/fitness-trainer/fitness-template-1.webp'
            name='Views'
            position='13/12/2023'
          />
        </GridContainer>
      </Container>
    </div>
  )
}
