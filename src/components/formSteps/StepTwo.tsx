import { Radio } from "@components/formElements";

import RocketIcon from "@assets/rocket.svg";
import PlantIcon from "@assets/plant.svg";
import TrophyIcon from "@assets/trophy.svg";
import CompassIcon from "@assets/compass.svg";

import { useFormContext } from "react-hook-form";
import { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@components/AnimatedDiv";

export default function StepTwo({ direction }: { direction: number }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputsT>();

  return (
    <AnimatedDiv className="flex flex-col gap-7" direction={direction}>
      <div>
        <h2 className="mb-2 text-2xl font-medium">Skill Level</h2>
        <p className="text-sm text-myGray-500">
          Please tell us about your skill level in frontend development.
        </p>
      </div>
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2 ">
        <Radio
          id="beginner"
          label="Beginner"
          icon={PlantIcon}
          {...register("skillLevel")}
        />
        <Radio
          id="intermediate"
          label="Intermediate"
          icon={CompassIcon}
          {...register("skillLevel")}
        />
        <Radio
          id="advanced"
          label="Advanced"
          icon={RocketIcon}
          {...register("skillLevel")}
        />
        <Radio
          id="expert"
          label="Expert"
          icon={TrophyIcon}
          {...register("skillLevel")}
        />
      </div>
      {errors.skillLevel?.type === "invalid_type" ? (
        <p className="text-xs text-red-500">Select your skill level</p>
      ) : null}
    </AnimatedDiv>
  );
}
