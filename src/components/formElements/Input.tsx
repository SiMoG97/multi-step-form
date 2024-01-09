import { ComponentProps, forwardRef } from "react";

type InputProps = {
  label: string;
  errorMessage?: string;
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, errorMessage, id, ...props },
  ref,
) {
  return (
    <div className="relative flex w-full flex-col gap-[9px] text-sm">
      <label className="block font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="block h-[40px] rounded-[10px] border px-3 py-2 text-sm outline-none placeholder:text-myGray-400 focus:border-myOrange-500"
        ref={ref}
        {...props}
      />
      {errorMessage ? (
        <p className="px-3 text-xs text-red-500">{errorMessage}</p>
      ) : null}
    </div>
  );
});
export default Input;
