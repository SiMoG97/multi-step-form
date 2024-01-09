import { ComponentProps, forwardRef } from "react";

type RadioProps = { label: string; icon: string } & ComponentProps<"input">;

const Radio = forwardRef<HTMLInputElement, RadioProps>(function (
  { label, icon, id, ...props },
  ref,
) {
  return (
    <div className="flex w-full flex-col  gap-1 text-sm">
      <label
        className="flex h-[69px] cursor-pointer select-none items-center gap-4 rounded-[10px] border px-4 font-medium  hover:bg-gray-50 active:bg-gray-100 has-[:checked]:border-myOrange-500"
        htmlFor={id}
      >
        <span className="circle flex size-[34px] items-center justify-center rounded-full bg-myOrange-500 ">
          <img src={icon} alt="" />{" "}
          <input
            type="radio"
            value={label}
            id={id}
            className="absolute appearance-none"
            ref={ref}
            {...props}
          />
        </span>
        <span>{label}</span>
      </label>
    </div>
  );
});

export default Radio;
