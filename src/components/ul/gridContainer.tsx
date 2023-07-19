import React, { FC } from 'react'
import { cn } from '../../libs/utlls';


interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}
export const GridContainer: FC<GridContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(`grid grid-cols-3 gap-2`, className)}>
      {children}
    </div>
  )
}
