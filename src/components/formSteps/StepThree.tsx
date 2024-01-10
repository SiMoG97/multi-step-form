import { FormInputsT } from "@/formSchema";
import { Checkbox } from "@components/formElements";
import { useFormContext } from "react-hook-form";
import { StepContainer } from ".";
import AnimatedDiv from "../AnimatedDiv";

export default function StepThree({ step }: { step: number }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputsT>();
  return (
    <StepContainer className="flex flex-col gap-7">
      <AnimatedDiv
        variant="staggered"
        className="grid gap-x-10 gap-y-6 md:grid-cols-2 "
        shouldAnimate={step === 2}
      >
        <div className="mb-4">
          <h2 className="mb-2 text-2xl font-medium">Challenge Preference</h2>
          <p className="text-sm text-myGray-500">
            Please tell us which frontend challenges you would like to
            participate in.
          </p>
        </div>
        <Checkbox
          id="htmlCssJs"
          label="HTML/CSS/JS"
          {...register("challengePref")}
          disabled={step !== 2}
        />
        <Checkbox
          id="raectjs"
          label="ReactJs"
          {...register("challengePref")}
          disabled={step !== 2}
        />
        <Checkbox
          id="angularjs"
          label="AngularJs"
          {...register("challengePref")}
          disabled={step !== 2}
        />
        <Checkbox
          id="vuejs"
          label="Vue.js"
          {...register("challengePref")}
          disabled={step !== 2}
        />
      </AnimatedDiv>
      {errors.challengePref?.type === "invalid_type" ||
      errors.challengePref?.type === "too_small" ? (
        <p className="text-xs text-red-500">Select at least one challenge</p>
      ) : null}
    </StepContainer>
  );
}
