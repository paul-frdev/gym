import React, { FC } from 'react';
import { cn } from '../../libs/utlls';

interface CartProps {
  src: string;
  className?: string;
  name: string;
  position: string;
}
export const Cart: FC<CartProps> = ({ src, className, name, position }) => {
  return (
    <div
      className={cn(
        `bg-white flex justify-center items-start flex-col shadow-lg shadow-2xl rounded-md max-w-[420px] w-full m-auto mb-4 md:mb-0`,
        className
      )}
    >
      {name === 'Views' ? (
        <>
          <img className="rounded-md w-full h-full" src={src} alt="image" />
          <div className="flex justify-between w-full p-4">
            <p className="text-lg font-normal p-2 pb-1">{name}</p>
            <p className="text-lg font-semibold p-2">{position}</p>
          </div>
        </>
      ) : (
        <>
          <img className="rounded-md w-full h-full" src={src} alt="image" />
          <p className="text-lg font-normal p-2 pb-1">{name}</p>
          <p className="text-lg font-semibold p-2">{position}</p>
        </>
      )}
    </div>
  );
};
