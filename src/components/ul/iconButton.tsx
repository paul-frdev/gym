import React, { FC, MouseEventHandler } from 'react';
import { cn } from '../../libs/utlls';

interface IconButtonProps {
  className?: string;
  icon: React.ReactElement;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const IconButton: FC<IconButtonProps> = ({ className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(`rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition`, className)}
    >
      {icon}
    </button>
  );
};
