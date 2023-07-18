import React, { FC } from 'react'


interface HeadingProps {
  title: string;
}
export const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <h3 className='text-primary font-semibold text-xl text-center'>{title}</h3>
  )
}
