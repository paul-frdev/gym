import React from 'react'
import { Heading } from './ul/heading'
import { Title } from './ul/title'
import { Subtitle } from './ul/subtitle'
import { Container } from './ul/container'
import { GridContainer } from './ul/gridContainer'
import { Cart } from './ul/cart'

export const Trainers = () => {
  return (
    <div className='bg-gray-200 pb-16'>
      <Container className='max-w-[1200px]'>
        <Heading title='Trainers' />
        <Title title='Meet our Experienced Trainers' />
        <Subtitle subtitle='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut beatae, debitis deleniti veritatis facere placeat sint eos' />
        <GridContainer>
          <Cart
            src='https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0='
            name='John Doe'
            position='Cardio Trainer'
          />
          <Cart
            src='https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0='
            name='John Doe'
            position='Cardio Trainer'
          />
          <Cart
            src='https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0='
            name='John Doe'
            position='Cardio Trainer'
          />
        </GridContainer>
      </Container>
    </div>
  )
}
