import React, { FC } from 'react'
import { cn } from '../../libs/utlls';

interface TitleProps {
  title: string;
  className?: string;
}
export const Title: FC<TitleProps> = ({ title, className }) => {
  return (
    <h2 className={cn(`text-center text-4xl font-semibold`, className)}>{title}</h2>
  )
}
