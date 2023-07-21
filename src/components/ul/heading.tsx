import React, { FC } from 'react';
import { cn } from '../../libs/utlls';

interface HeadingProps {
  title: string;
  className?: string;
}
export const Heading: FC<HeadingProps> = ({ title, className }) => {
  return <h2 className={cn(`text-primary font-semibold text-2xl  md:text-3xl text-center py-4`, className)}>{title}</h2>;
};
