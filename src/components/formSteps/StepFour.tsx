import { FormInputsT } from "@/formSchema";
import { useFormContext } from "react-hook-form";
import { StepContainer } from ".";
import AnimatedDiv from "../AnimatedDiv";

export default function StepFour({ step }: { step: number }) {
  const { getValues } = useFormContext<FormInputsT>();
  const allValues = getValues();
  return (
    <StepContainer className="flex flex-col gap-7">
      <AnimatedDiv
        variant="staggered"
        className="grid gap-6 md:grid-cols-3 "
        shouldAnimate={step === 3}
      >
        <div className="mb-4">
          <h2 className="mb-2 text-2xl font-medium">Review and Confirm</h2>
          <p className="text-sm text-myGray-500">
            Please review your information to make sure everything is accurate.
          </p>
        </div>
        <ReviewCard title="Full Name" details={allValues.fullName} />
        <ReviewCard title="Email Address" details={allValues.email} />
        <ReviewCard title="Phone Number" details={allValues.phoneNumber} />
        {allValues.portfolioGithubLink ? (
          <ReviewCard
            title="Portfolio/GitHub Link"
            details={allValues.portfolioGithubLink}
          />
        ) : null}
        <ReviewCard title="Skill Level" details={allValues.skillLevel} />
        <ReviewCard title="Challenge Preference">
          <ul>
            {allValues.challengePref &&
              allValues.challengePref.map((challenge) => (
                <li key={challenge} className="font-medium">
                  {challenge}
                </li>
              ))}
          </ul>
        </ReviewCard>
        {/* {allValues.portfolioGithubLink ? (
          <ReviewCard
            title="Portfolio/GitHub Link"
            details={allValues.portfolioGithubLink}
          />
        ) : null}
      */}
      </AnimatedDiv>
    </StepContainer>
  );
}

function ReviewCard({
  title,
  details,
  children,
}: {
  title: string;
  details?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70px] flex-col justify-center gap-1 rounded-[10px] bg-myGray-100 px-3 py-2 text-xs">
      <div className="text-myGray-600">{title}</div>
      {details ? (
        <div className="break-words font-medium">{details}</div>
      ) : null}
      {children ? children : null}
    </div>
  );
}
