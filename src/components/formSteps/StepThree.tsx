import { FormInputsT } from "@/formSchema";
import { Checkbox } from "@components/formElements";
import { useFormContext } from "react-hook-form";
import AnimatedDiv from "@components/AnimatedDiv";

export default function StepThree({ direction }: { direction: number }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputsT>();
  return (
    <AnimatedDiv className="flex flex-col gap-7" direction={direction}>
      <div>
        <h2 className="mb-2 text-2xl font-medium">Challenge Preference</h2>
        <p className="text-sm text-myGray-500">
          Please tell us which frontend challenges you would like to participate
          in.
        </p>
      </div>
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 ">
        <Checkbox
          id="htmlCssJs"
          label="HTML/CSS/JS"
          {...register("challengePref")}
        />
        <Checkbox id="raectjs" label="ReactJs" {...register("challengePref")} />
        <Checkbox
          id="angularjs"
          label="AngularJs"
          {...register("challengePref")}
        />
        <Checkbox id="vuejs" label="Vue.js" {...register("challengePref")} />
      </div>
      {errors.challengePref?.type === "invalid_type" ? (
        <p className="text-xs text-red-500">Select at least one challenge</p>
      ) : null}
    </AnimatedDiv>
  );
}
