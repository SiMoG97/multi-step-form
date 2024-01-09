import { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { variant, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
});
export default Button;

const buttonVariants = cva(
  "border px-[12px] py-[8px] xs:px-[26px] xs:py-[10px] rounded-[10px] border-myOrange-500 transition-colors active:scale-[98%] ",
  {
    variants: {
      variant: {
        primary: `bg-myOrange-500 text-white hover:bg-myOrange-600 hover:text-gray-50 active:bg-myOrange-700 active:text-gray-100`,
        secondary:
          "text-myOrange-500 bg-white hover:bg-gray-50 hover:text-myOrange-600 active:bg-gray-100 active:text-myOrange-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
