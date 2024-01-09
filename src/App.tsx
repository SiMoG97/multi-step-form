import { FormProvider, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";

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

  const [direction, setDirection] = useState(1);

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
      setStep((prev) => {
        setDirection(1);
        return prev + 1;
      });
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

        <div className="w-full overflow-hidden rounded-2xl bg-white p-3 shadow-custom xs:p-5 md:p-8 ">
          <AnimatePresence custom={1} mode="wait">
            {step !== 4 ? <ProgressBar step={step} /> : null}
          </AnimatePresence>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setStep((prev) => prev + 1);
              })}
            >
              <div className="py-8">
                <AnimatePresence custom={direction} mode="wait">
                  {step === 0 ? (
                    <StepOne
                      direction={direction}
                      key="one"
                      nextBtnRef={nextBtnRef}
                    />
                  ) : null}
                  {step === 1 ? (
                    <StepTwo direction={direction} key="two" />
                  ) : null}
                  {step === 2 ? (
                    <StepThree direction={direction} key="three" />
                  ) : null}
                  {step === 3 ? (
                    <StepFour direction={direction} key="four" />
                  ) : null}
                  {step === 4 ? <StepFive key="five" /> : null}
                  {/* {RenderStep()} */}
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                {step !== 4 ? (
                  <AnimatedDiv
                    key="buttons"
                    direction={1}
                    className="flex flex-row-reverse justify-between border-t-2 border-myGray-200 pt-8"
                  >
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
                        onClick={() =>
                          setStep((prev) => {
                            setDirection(-1);
                            return prev - 1;
                          })
                        }
                        variant={"secondary"}
                      >
                        Go Back
                      </Button>
                    ) : null}
                  </AnimatedDiv>
                ) : null}
              </AnimatePresence>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}

export default App;
