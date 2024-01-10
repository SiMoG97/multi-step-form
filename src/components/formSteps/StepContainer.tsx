import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export default function StepContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full shrink-0  px-3 xs:px-5 md:px-8", className)}
      {...props}
    />
  );
}
