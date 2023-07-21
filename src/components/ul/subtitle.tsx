import React, { FC } from 'react';
import { cn } from '../../libs/utlls';

interface SubtitleProps {
  subtitle: string;
  className?: string;
}
export const Subtitle: FC<SubtitleProps> = ({ subtitle, className }) => {
  return <p className={cn(`text-center text-lg mb-4`, className)}>{subtitle}</p>;
};
