import * as React from 'react'
import { cn } from './utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
