import { useFormContext } from "react-hook-form";
import { Input } from "@components/formElements";
import { FormInputsT } from "@/formSchema";
import { StepContainer } from ".";
import AnimatedDiv from "../AnimatedDiv";

// import { motion } from "framer-motion";

export default function StepOne({
  nextBtnRef,
  step,
}: {
  nextBtnRef: React.RefObject<HTMLButtonElement>;
  step: number;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputsT>();
  return (
    <StepContainer className="flex flex-col gap-7">
      <AnimatedDiv
        variant="staggered"
        className="grid gap-x-10 gap-y-6 md:grid-cols-2 "
        shouldAnimate={step === 0}
      >
        <div className="mb-4">
          <h2 className="mb-2 text-2xl font-medium">Personal Information</h2>
          <p className="text-sm text-myGray-500">
            Please provide your personal details so we can get to know you
            better.
          </p>
        </div>
        <Input
          label="Full Name"
          disabled={step !== 0}
          placeholder="Rishi Purwar"
          id="fullName"
          errorMessage={errors.fullName?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("fullName")}
        />
        <Input
          type="email"
          disabled={step !== 0}
          label="Email Address"
          placeholder="name@email.com"
          id="emailAddress"
          errorMessage={errors.email?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("email")}
        />
        <Input
          type="tel"
          disabled={step !== 0}
          label="Phone Number"
          placeholder="+91 1234567890"
          id="phoneNumber"
          errorMessage={errors.phoneNumber?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("phoneNumber")}
        />
        <Input
          label="Portfolio/Github Link"
          disabled={step !== 0}
          placeholder="github.com/rishipurwar1"
          id="portfolioGithubLink"
          errorMessage={errors.portfolioGithubLink?.message}
          onKeyUp={(e) => {
            if (e.key === "Enter" && nextBtnRef.current) {
              e.preventDefault();
              nextBtnRef.current.click();
            }
          }}
          {...register("portfolioGithubLink")}
        />
      </AnimatedDiv>
    </StepContainer>
  );
}
