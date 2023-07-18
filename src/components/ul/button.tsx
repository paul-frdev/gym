import { cn } from '../../libs/utlls';
import React, { forwardRef } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto rounded-full px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold bg-primary border-2 border-white hover:text-primary hover:bg-transparent hover:opacity-100 hover:border-primary transition`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';