import React, { FC } from 'react'
import { cn } from '../../libs/utlls';


interface ContainerProps {
  children: React.ReactNode,
  className?: string;
}
export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(`max-w-[1380px] m-auto px-4`, className)}>
      {children}
    </div>
  )
}
