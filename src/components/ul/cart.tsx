import React, { FC } from 'react'
import { cn } from '../../libs/utlls';

interface CartProps {
  src: string;
  className?: string
  name: string;
  position: string;
}
export const Cart: FC<CartProps> = ({ src, className, name, position }) => {
  return (
    <div className={cn(`bg-white flex justify-center items-start flex-col shadow-lg shadow-2xl`, className)}>
      {name === 'Views' ? (
        <>
          <img className='' src={src} alt="image" />
          <div className='flex justify-between w-full p-4'>
            <p className='text-md font-semibold p-2'>{name}</p>
            <p className='text-md font-semibold p-2'>{position}</p>
          </div>
        </>
      ) : (
        <>
          <img className='' src={src} alt="image" />
          <p className='text-md font-semibold p-2'>{name}</p>
          <p className='text-md font-semibold p-2'>{position}</p>
        </>
      )}
    </div>
  )
}
