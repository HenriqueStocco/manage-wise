import * as React from 'react'
import { cn } from './utils/cn'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChield?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChield = false, ...props }, ref) => {
    const Comp = asChield ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'bg-teal-400 h-10 w-80 rounded-lg text-stone-50 shadow-md hover:bg-teal-400/95 hover:text-stone-100',
          className,
        )}
        {...props}
      />
    )
  },
)

export { Button }
