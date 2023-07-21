import React, { FC } from 'react';
import { cn } from '../../libs/utlls';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(`max-w-[1380px] m-auto p-0 px-2 md:p-4`, className)}>{children}</div>;
};
