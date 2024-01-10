import { FormProvider, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@components/formElements";
import {
  ProgressBar,
  StepFive,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
} from "@components/formSteps";
import formSchema, { FormInputsT } from "@/formSchema";
import AnimatedDiv from "@components/AnimatedDiv";

function App() {
  const [step, setStep] = useState(0);

  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const methods = useForm<FormInputsT>({ resolver: zodResolver(formSchema) });
  const { handleSubmit, trigger } = methods;

  const nextStepsHandler = async () => {
    let goNext = false;
    if (step === 0) {
      goNext = await trigger([
        "email",
        "fullName",
        "phoneNumber",
        "portfolioGithubLink",
      ]);
    } else if (step === 1) {
      goNext = await trigger(["skillLevel"]);
    } else if (step === 2) {
      goNext = await trigger(["challengePref"]);
    }
    if (goNext) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center bg-myOrange-100 p-5 font-poppins text-myBlack-800 md:p-0">
      <div className="w-full  max-w-[640px]">
        <div className="flex flex-col gap-4 px-0 py-8 text-center md:px-8">
          <h1 className="font-merriweather text-[2rem] font-black">
            Join our Community of Developers
          </h1>
          <p className="text-lg">
            To join our community and participate in frontend challenges. Please
            fill out the following form.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl bg-white shadow-custom ">
          <ProgressBar step={step} />
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setStep((prev) => prev + 1);
              })}
            >
              <AnimatedDiv step={step} className="flex items-center py-8">
                <StepOne step={step} nextBtnRef={nextBtnRef} />
                <StepTwo step={step} />
                <StepThree step={step} />
                <StepFour step={step} />
                <StepFive />
              </AnimatedDiv>
              <AnimatedDiv
                className="px-3 xs:px-5 md:px-8"
                key="buttons"
                step={step === 4 ? 1 : 0}
              >
                <div className="flex flex-row-reverse justify-between border-t-2 border-myGray-200 py-3 xs:py-5  md:py-8">
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStepsHandler}
                      ref={nextBtnRef}
                      variant={"primary"}
                    >
                      Next Step
                    </Button>
                  ) : null}
                  {step === 3 ? (
                    <Button type="submit" variant={"primary"}>
                      Submit
                    </Button>
                  ) : null}

                  {step !== 0 ? (
                    <Button
                      type="button"
                      onClick={() => setStep((prev) => prev - 1)}
                      variant={"secondary"}
                    >
                      Go Back
                    </Button>
                  ) : null}
                </div>
              </AnimatedDiv>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}

export default App;
