import { cn } from "@/utils/cn";
import { motion, Variants } from "framer-motion";
import { Children, ComponentProps } from "react";

const anim = (variants: Variants, custom: number = 0) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

const slider: Variants = {
  enter: (step) => ({
    x: `${-100 * step}%`,
    transition: {
      duration: 0.3,
    },
  }),
};

const staggerAnim: Variants = {
  enter: () => {
    const duration = 0.1;
    return {
      transition: {
        duration,
        staggerChildren: duration,
      },
    };
  },
};

const item: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type PropsT = {
  children: React.ReactNode;
  step?: number;
  variant?: "default" | "staggered";
  shouldAnimate?: boolean;
} & ComponentProps<"div">;

export default function AnimatedDiv({
  children,
  variant,
  className,
  step = 0,
  shouldAnimate = false,
}: PropsT) {
  if (variant === "staggered") {
    return (
      <motion.div
        initial="initial"
        variants={staggerAnim}
        animate={shouldAnimate ? "enter" : "initial"}
        className={cn(className)}
      >
        {Children.map(children, (child, i) => {
          return (
            <>
              {child ? (
                <motion.div
                  key={i + step}
                  variants={item}
                  className={cn(i === 0 ? "col-span-full" : "")}
                >
                  {child}
                </motion.div>
              ) : null}
            </>
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div {...anim(slider, step)} className={className}>
      {children}
    </motion.div>
  );
}
