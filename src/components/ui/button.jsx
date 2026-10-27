/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl text-sm font-semibold transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:scale-[0.98]',
        pill: 'bg-white text-blue-600 rounded-full shadow-md hover:bg-gray-50 active:scale-[0.98]',
        glass:
          'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md shadow-sm active:scale-[0.98]',
        outline:
          'border border-blue-500/30 text-blue-400 bg-transparent hover:bg-blue-600 hover:text-white',
        ghost: 'hover:bg-white/10 active:bg-white/20 text-current',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 px-2.5 text-xs rounded-lg',
        sm: 'h-8 px-3 text-xs rounded-lg',
        lg: 'h-12 px-6 text-sm rounded-xl',
        icon: 'size-10 rounded-lg p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant = 'default', size = 'default', asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
