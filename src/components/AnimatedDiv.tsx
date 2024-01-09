import { motion, Variants } from "framer-motion";
import { ComponentProps } from "react";

type PropsT = {
  children: React.ReactNode;
  direction: number;
} & ComponentProps<"div">;

export default function AnimatedDiv({
  children,
  className,
  direction,
}: PropsT) {
  // console.log(direction);
  // const anim = (variants: Variants, direction: number) => {
  const anim = (variants: Variants, custom: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const nextStep: Variants = {
    initial: (direction) => ({
      scale: 0.8,
      opacity: 0,
      x: `${25 * direction}%`,
    }),

    enter: {
      scale: 1,
      opacity: 1,
      x: "0%",
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.15,
      },
    },

    exit: (direction) => ({
      opacity: 0,
      scale: 0.8,
      x: `${-25 * direction}%`,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.15,
      },
    }),
  };

  return (
    <motion.div {...anim(nextStep, direction)} className={className}>
      {children}
    </motion.div>
  );
}
