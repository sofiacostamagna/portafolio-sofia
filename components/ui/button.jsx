"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-font-secondary dark:focus-visible:ring-accent",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-primary hover:bg-accent-hover dark:bg-accent-focus dark:text-primary dark:hover:bg-accent-hover",
        destructive:
          "bg-red-800 text-primary hover:bg-red-500/90 dark:bg-red-900 dark:text-primary dark:hover:bg-red-900/90",
        outline:
          "border border-accent text-accent bg-transparent hover:bg-accent hover:text-primary dark:border-accent dark:hover:bg-accent dark:hover:text-primary",
        secondary:
          "bg-font-secondary text-primary hover:bg-font-primary/80 dark:bg-font-primary dark:text-primary dark:hover:bg-font-secondary/80",
        ghost:
          "hover:bg-font-primary/10 hover:text-font-secondary dark:hover:bg-font-secondary/10 dark:hover:text-primary",
        link: "text-accent underline-offset-4 hover:underline dark:text-accent-hover",
      },
      size: {
        default: "h-10 px-4  rounded-full py-4",
        sm: "h-9 rounded-full px-3",
        lg: "h-12 rounded-full px-8",

        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
