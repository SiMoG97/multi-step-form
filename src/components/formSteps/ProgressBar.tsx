import { cn } from "@/utils/cn";
import AnimatedDiv from "@components/AnimatedDiv";

export default function ProgressBar({ step }: { step: number }) {
  return (
    <AnimatedDiv step={step === 4 ? 1 : 0} className="px-3 xs:px-5 md:px-8">
      <div className="flex select-none items-center justify-between gap-4 border-b-2 border-myGray-200 px-5 py-5  md:py-8">
        <StepCircle step={1} fill />

        <StepBar fill={step + 1 >= 2} />
        <StepCircle step={2} fill={step + 1 >= 2} />

        <StepBar fill={step + 1 >= 3} />
        <StepCircle step={3} fill={step + 1 >= 3} />

        <StepBar fill={step + 1 >= 4} />
        <StepCircle fill={step + 1 >= 4} step={4} />
      </div>
    </AnimatedDiv>
  );
}

function StepCircle({ step, fill }: { step: number; fill: boolean }) {
  return (
    <div
      className={cn(
        " relative size-[34px] shrink-0  overflow-hidden rounded-full",
      )}
    >
      <span className="absolute flex h-full w-full items-center justify-center bg-myGray-200">
        {step}
      </span>
      <span
        className={cn(
          " absolute flex h-full w-full items-center justify-center bg-myOrange-500 text-white delay-150 duration-150",
          fill
            ? "clip-path-inset-[0_0_0_0]"
            : "clip-path-inset-[0_100%_0_0] delay-0",
        )}
      >
        {step}
      </span>
    </div>
  );
}

function StepBar({ fill }: { fill: boolean }) {
  return (
    <div
      className={cn(
        "relative hidden h-[6px] w-full overflow-hidden rounded-[50px] bg-myGray-200 sm:block",
        "before:absolute before:-left-full before:h-[6px] before:w-full before:bg-myOrange-500 before:duration-200 before:content-['']",
        fill ? "before:left-0 " : "before:delay-150",
      )}
    ></div>
  );
}
