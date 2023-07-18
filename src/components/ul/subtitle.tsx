import React, { FC } from 'react'

interface SubtitleProps {
  subtitle: string;
}
export const Subtitle: FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <p className='text-center text-md'>{subtitle}</p>
  )
}
