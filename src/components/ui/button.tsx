import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "press inline-flex min-h-12 items-center justify-center rounded-sm px-5 text-sm font-medium no-underline",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper hover:bg-steel",
        secondary: "border border-line bg-transparent text-ink hover:bg-cream",
        inverse: "bg-paper text-ink hover:bg-cream",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
